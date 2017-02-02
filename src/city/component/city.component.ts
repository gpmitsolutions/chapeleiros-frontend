import { Component } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { City } from '../models/city'
import { CityService } from '../service/city.service';
import { GenericResult, GenericSimpleResult } from '../../shared/models/genericResult';

@Component({
    selector: 'city',
    template: '<div></div>'
})
export class CityComponent {
    public cities: City[] = [];
    public currentCity: City;

    constructor(private service: CityService) {
  
    }

    private loadCityByState(Id: AAGUID): void {
        this.cities = [];
        this.service.GetCitiesByState(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.cities = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }

    private loadCity(Id: AAGUID): void {
        this.currentCity = new City();
        this.service.getById(Id)
            .subscribe((res) => {
                if (res.success) {
                    this.currentCity = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}