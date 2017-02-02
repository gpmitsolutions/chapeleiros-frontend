import { Component, OnInit } from '@angular/core';

import { LegalPerson } from '../models/legalPerson'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { LegalPersonService } from '../service/legalPerson.service';
import { StateService } from '../../state/service/state.service';
import { CityService } from '../../city/service/city.service';

@Component({
    selector: 'legal-person',
    templateUrl: '../html/legalPerson.component.html'
})
export class LegalPersonComponent {
    public legalPersons: LegalPerson[] = [];
    public currentLegalPerson: LegalPerson = new LegalPerson();
    public inEditMode: boolean = false;
    public buttonLabel: string = 'Create';
    public states: State[] = [];
    public cities: City[] = [];

    constructor(private service: LegalPersonService,
                private stateService: StateService,
                private cityService: CityService) {
        
    }

    public onSelect(stateId) {        
        this.cities = [];
        this.cityService.GetCitiesByState(stateId)
            .subscribe((res => {
                if(res.success) {
                    this.cities = res.result;
                    console.log(this.cities);
                } else {
                    console.error(res.errors);
                }
            }))
    }

    public ngOnInit() {        
        this.loadStates();
    }

    private loadStates(): void {
        this.states = [];
        this.stateService.list()
            .subscribe((res => {
                if(res.success) {
                    this.states = res.result;
                    console.log(res.result);
                    console.log(this.states);

                } else {
                    console.error(res.errors);
                }
            }))
    }

     private loadLegalPersons(): void {
        this.legalPersons = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.legalPersons = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    public edit(legalPerson: LegalPerson): void {
        this.currentLegalPerson = legalPerson;
        this.inEditMode = true;
        this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(legalPerson: LegalPerson): void {
        this.service.put(legalPerson.Id, legalPerson)
            .subscribe((res) => {
                if (!res.success) {
                    console.error(res.errors);
                }
            });
    }

    public save(): void {
        if (!this.inEditMode) {
            this.saveNewLegalPerson();
        } else {
            this.updateLegalPerson();
        }
    }

    public remove(Id: AAGUID): void {
        this.service.delete(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.loadLegalPersons();
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private updateLegalPerson(): void {
        this.service.put(this.currentLegalPerson.Id, this.currentLegalPerson)
            .subscribe((res) => {
                if (res.success) {
                    this.currentLegalPerson = new LegalPerson();
                    this.inEditMode = false;
                    this.buttonLabel = 'Criar';
                }
                else {
                    console.error(res.errors);
                }
            })
    }

    private saveNewLegalPerson(): void {
        console.log(this.currentLegalPerson);
        this.service.post(this.currentLegalPerson)
            .subscribe((res) => {
                if (res.success) {
                    this.legalPersons.push(res.result);
                    this.currentLegalPerson = new LegalPerson();
                    this.inEditMode = false;
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private loadLegalPerson(Id: AAGUID): void {
        this.currentLegalPerson = new LegalPerson();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentLegalPerson = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}