import { Component, OnInit } from '@angular/core';

import { PolicyPrivacy } from '../models/PolicyPrivacy'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { PolicyPrivacyService } from '../service/PolicyPrivacy.service';

@Component({
    selector: 'policyPrivacy',
    templateUrl: '../html/policyPrivacy.component.html'
})
export class PolicyPrivacyComponent implements OnInit {
    public policyPrivacys: PolicyPrivacy[] = [];
    public currentPolicyPrivacy: PolicyPrivacy = new PolicyPrivacy();
    public inEditMode: boolean = false;
    public buttonLabel: string = 'Create';

    constructor(private service: PolicyPrivacyService) {
        
    }  

    public ngOnInit() {        
        this.loadPolicyPrivacys();
    }

     private loadPolicyPrivacys(): void {
        this.policyPrivacys = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.policyPrivacys = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    public edit(policyPrivacy: PolicyPrivacy): void {
        this.currentPolicyPrivacy = policyPrivacy;
        this.inEditMode = true;
        this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(policyPrivacy: PolicyPrivacy): void {
        this.service.put(policyPrivacy.Id, policyPrivacy)
            .subscribe((res) => {
                if (!res.success) {
                    console.error(res.errors);
                }
            });
    }

    public save(): void {
        if (!this.inEditMode) {
            this.saveNewPolicyPrivacy();
        } else {
            this.updatePolicyPrivacy();
        }
    }

    public remove(Id: AAGUID): void {
        this.service.delete(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.loadPolicyPrivacys();
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private updatePolicyPrivacy(): void {
        this.service.put(this.currentPolicyPrivacy.Id, this.currentPolicyPrivacy)
            .subscribe((res) => {
                if (res.success) {
                    this.currentPolicyPrivacy = new PolicyPrivacy();
                    this.inEditMode = false;
                    this.buttonLabel = 'Criar';
                }
                else {
                    console.error(res.errors);
                }
            })
    }

    private saveNewPolicyPrivacy(): void {
        console.log(this.currentPolicyPrivacy);
        this.service.post(this.currentPolicyPrivacy)
            .subscribe((res) => {
                if (res.success) {
                    this.policyPrivacys.push(res.result);
                    this.currentPolicyPrivacy = new PolicyPrivacy();
                    this.inEditMode = false;
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private loadPolicyPrivacy(Id: AAGUID): void {
        this.currentPolicyPrivacy = new PolicyPrivacy();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentPolicyPrivacy = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}