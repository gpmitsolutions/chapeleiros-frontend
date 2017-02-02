import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FieldOfBusiness } from '../models/FieldOfBusiness';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class FieldOfBusinessService {
    private baseUrl: string = 'http://localhost:21263/api/FieldOfBusiness';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<FieldOfBusiness[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<FieldOfBusiness>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(fieldOfBusiness: FieldOfBusiness): Observable<GenericResult<FieldOfBusiness>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", fieldOfBusiness);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(fieldOfBusiness), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, fieldOfBusiness: FieldOfBusiness): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(fieldOfBusiness), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}