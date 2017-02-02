import { Component, OnInit } from '@angular/core';

import { FieldOfBusiness } from '../models/FieldOfBusiness'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { FieldOfBusinessService } from '../service/FieldOfBusiness.service';

@Component({
    selector: 'fieldOfBusiness',
    templateUrl: '../html/fieldOfBusiness.component.html'
})
export class FieldOfBusinessComponent implements OnInit {
    public fieldOfBusiness: FieldOfBusiness[] = [];
    public currentFieldOfBusiness: FieldOfBusiness = new FieldOfBusiness();
    public inEditMode: boolean = false;
    public buttonLabel: string = 'Create';

    constructor(private service: FieldOfBusinessService) {
        
    }  

    public ngOnInit() {        
        this.loadFieldsOfBusiness();
    }

     private loadFieldsOfBusiness(): void {
        this.fieldOfBusiness = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.fieldOfBusiness = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    public edit(fieldOfBusiness: FieldOfBusiness): void {
        this.currentFieldOfBusiness = fieldOfBusiness;
        this.inEditMode = true;
        this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(fieldOfBusiness: FieldOfBusiness): void {
        this.service.put(fieldOfBusiness.Id, fieldOfBusiness)
            .subscribe((res) => {
                if (!res.success) {
                    console.error(res.errors);
                }
            });
    }

    public save(): void {
        if (!this.inEditMode) {
            this.saveNewFieldOfBusiness();
        } else {
            this.updateFieldOfBusiness();
        }
    }

    public remove(Id: AAGUID): void {
        this.service.delete(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.loadFieldsOfBusiness();
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private updateFieldOfBusiness(): void {
        this.service.put(this.currentFieldOfBusiness.Id, this.currentFieldOfBusiness)
            .subscribe((res) => {
                if (res.success) {
                    this.currentFieldOfBusiness = new FieldOfBusiness();
                    this.inEditMode = false;
                    this.buttonLabel = 'Criar';
                }
                else {
                    console.error(res.errors);
                }
            })
    }

    private saveNewFieldOfBusiness(): void {
        console.log(this.currentFieldOfBusiness);
        this.service.post(this.currentFieldOfBusiness)
            .subscribe((res) => {
                if (res.success) {
                    this.fieldOfBusiness.push(res.result);
                    this.currentFieldOfBusiness = new FieldOfBusiness();
                    this.inEditMode = false;
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private loadFieldOfBusiness(Id: AAGUID): void {
        this.currentFieldOfBusiness = new FieldOfBusiness();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentFieldOfBusiness = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}