import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PhysicalPerson } from '../models/physicalPerson';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class PhysicalPersonService {
    private baseUrl: string = 'http://localhost:21263/api/PhysicalPerson'

    constructor(private http: Http) {

    }

    public getById(Id: AAGUID): Observable<GenericResult<PhysicalPerson>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public list(): Observable<GenericResult<PhysicalPerson[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public post(physicalPerson: PhysicalPerson): Observable<GenericResult<PhysicalPerson>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", physicalPerson);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + '/setperson', JSON.stringify(physicalPerson), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, physicalPerson: PhysicalPerson): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(physicalPerson), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}