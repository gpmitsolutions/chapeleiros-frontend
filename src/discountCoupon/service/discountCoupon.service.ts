import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DiscountCoupon } from '../models/DiscountCoupon';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class DiscountCouponService {
    private baseUrl: string = 'http://localhost:21263/api/DiscountCoupon';

    constructor(private http: Http) {

    }

    public list(): Observable<GenericResult<DiscountCoupon[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    }    

    public getById(Id: AAGUID): Observable<GenericResult<DiscountCoupon>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public post(discountCoupon: DiscountCoupon): Observable<GenericResult<DiscountCoupon>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("Post: ", discountCoupon);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(discountCoupon), options)
                    .map(res => res.json());
    }

    public put(Id: AAGUID, discountCoupon: DiscountCoupon): Observable<GenericSimpleResult> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + Id, JSON.stringify(discountCoupon), { headers: headers })
            .map(res => res.json());
    }

    public delete(Id: AAGUID): Observable<GenericSimpleResult> {
        return this.http.delete(this.baseUrl + '/' + Id)
            .map(res => res.json());
    }
}