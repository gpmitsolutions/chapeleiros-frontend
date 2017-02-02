import { Component } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State } from '../models/state'
import { StateService } from '../service/state.service';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Component({
    selector: 'state',
    template: '<div></div>'
})
export class StateComponent {
    public states: State[] = [];
    public currentState: State;

    constructor(private service: StateService) {
  
    }

    private loadSateById(Id: AAGUID): void {
        this.currentState = new State();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentState = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    private loadState(Id: AAGUID): void {
        this.currentState = new State();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentState = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}