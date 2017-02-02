import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State } from '../models/state';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class StateService {
    private baseUrl: string = 'http://localhost:21263/api/State';

    constructor(private http: Http) {

    }

    public getById(Id: AAGUID): Observable<GenericResult<State>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public list(): Observable<GenericResult<State[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    } 
}