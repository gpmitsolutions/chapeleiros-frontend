import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Faq } from '../models/faq';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class FaqService {
    private baseUrl: string = 'http://localhost:21263/api/Faq';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<Faq[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<Faq>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(faq: Faq): Observable<GenericResult<Faq>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", faq);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(faq), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, faq: Faq): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(faq), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}