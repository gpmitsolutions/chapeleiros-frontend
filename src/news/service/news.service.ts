import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { News } from '../models/News';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class NewsService {
    private baseUrl: string = 'http://localhost:21263/api/News';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<News[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<News>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(news: News): Observable<GenericResult<News>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", news);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(news), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, news: News): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(news), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}