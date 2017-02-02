import { Component, OnInit } from '@angular/core';

import { PhysicalPerson } from '../models/physicalPerson'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { PhysicalPersonService } from '../service/physicalPerson.service';
import { StateService } from '../../state/service/state.service';
import { CityService } from '../../city/service/city.service';

import { Age } from '../../shared/models/age';
import { MaritalStatus } from '../../shared/models/maritalStatus';


@Component({
    selector: 'physical-person',
    templateUrl: '../html/physicalPerson.component.html'
    //styleUrls: ['./html/physicalPerson.component.css']
})
export class PhysicalPersonComponent implements OnInit {
    public physicalPersons: PhysicalPerson[] = [];
    public currentPhysicalPerson: PhysicalPerson = new PhysicalPerson();
    public inEditMode: boolean = false;
    public buttonLabel: string = 'Create';
    public age: Age;
    public maritalStatus: MaritalStatus;
    public states: State[] = [];
    public cities: City[] = [];

    constructor(private service: PhysicalPersonService,
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

     private loadPhysicalPersons(): void {
        this.physicalPersons = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.physicalPersons = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    public edit(physicalPerson: PhysicalPerson): void {
        this.currentPhysicalPerson = physicalPerson;
        this.inEditMode = true;
        this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(physicalPerson: PhysicalPerson): void {
        this.service.put(physicalPerson.Id, physicalPerson)
            .subscribe((res) => {
                if (!res.success) {
                    console.error(res.errors);
                }
            });
    }

    public save(): void {
        if (!this.inEditMode) {
            this.saveNewPhysicalPerson();
        } else {
            this.updatePhysicalPerson();
        }
    }

    public remove(Id: AAGUID): void {
        this.service.delete(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.loadPhysicalPersons();
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private updatePhysicalPerson(): void {
        this.service.put(this.currentPhysicalPerson.Id, this.currentPhysicalPerson)
            .subscribe((res) => {
                if (res.success) {
                    this.currentPhysicalPerson = new PhysicalPerson();
                    this.inEditMode = false;
                    this.buttonLabel = 'Criar';
                }
                else {
                    console.error(res.errors);
                }
            })
    }

    private saveNewPhysicalPerson(): void {
        console.log(this.currentPhysicalPerson);
        this.service.post(this.currentPhysicalPerson)
            .subscribe((res) => {
                if (res.success) {
                    this.physicalPersons.push(res.result);
                    this.currentPhysicalPerson = new PhysicalPerson();
                    this.inEditMode = false;
                }
                else {
                    console.error(res.errors);
                }
            });
    }

    private loadPhysicalPerson(Id: AAGUID): void {
        this.currentPhysicalPerson = new PhysicalPerson();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentPhysicalPerson = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

}