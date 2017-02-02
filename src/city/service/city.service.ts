import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { City } from '../models/city';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Injectable()
export class CityService {
    private baseUrl: string = 'http://localhost:21263/api/City'

    constructor(private http: Http){

    }

    public getById(Id: AAGUID): Observable<GenericResult<City>> {
        return this.http.get(this.baseUrl + '/' + Id)
                    .map(res => res.json());
    }

    public GetCitiesByState(Id: AAGUID): Observable<GenericResult<City[]>> {  
        var url = this.baseUrl + '/GetCityByState/' + Id;
        console.log(url);
        return this.http.get(this.baseUrl + '/GetCityByState/' + Id)
                    .map(res => res.json());
    }

    public list(): Observable<GenericResult<City[]>> {
        return this.http.get(this.baseUrl)
                    .map(res => res.json());
    } 
}