import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PolicyPrivacy } from '../models/PolicyPrivacy';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class PolicyPrivacyService {
    private baseUrl: string = 'http://localhost:21263/api/PolicyPrivacy';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<PolicyPrivacy[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<PolicyPrivacy>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(policyPrivacy: PolicyPrivacy): Observable<GenericResult<PolicyPrivacy>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", policyPrivacy);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(policyPrivacy), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, policyPrivacy: PolicyPrivacy): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(policyPrivacy), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}