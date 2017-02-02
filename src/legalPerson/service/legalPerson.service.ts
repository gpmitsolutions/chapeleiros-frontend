import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LegalPerson } from '../models/legalPerson';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class LegalPersonService {
    private baseUrl: string = 'http://localhost:21263/api/LegalPerson'

    constructor(private http: Http) {

    }

    public getById(Id: AAGUID): Observable<GenericResult<LegalPerson>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public list(): Observable<GenericResult<LegalPerson[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public post(legalPerson: LegalPerson): Observable<GenericResult<LegalPerson>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", legalPerson);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + '/setperson', JSON.stringify(legalPerson), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, legalPerson: LegalPerson): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(legalPerson), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}