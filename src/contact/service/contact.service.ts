import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../models/Contact';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class ContactService {
    private baseUrl: string = 'http://localhost:21263/api/Contact';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<Contact[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<Contact>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(contact: Contact): Observable<GenericResult<Contact>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", contact);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(contact), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, contact: Contact): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(contact), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}