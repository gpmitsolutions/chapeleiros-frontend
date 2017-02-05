import { Component, OnInit } from '@angular/core';

import { DiscountCoupon } from '../models/DiscountCoupon'
import { DiscountCouponService } from '../service/DiscountCoupon.service';


@Component({
    selector: 'createDiscountCoupon',
    templateUrl: '../html/createDiscountCoupon.component.html'
})
export class CreateDiscountCouponComponent {
    public currentDiscountCoupon: DiscountCoupon = new DiscountCoupon();

    constructor(private service: DiscountCouponService) {
        
    } 

    private saveNewDiscountCoupon(): void {
        console.log(this.currentDiscountCoupon);
        
        this.service.post(this.currentDiscountCoupon)
            .subscribe((res) => {
                if (res.success) {
                    this.currentDiscountCoupon = new DiscountCoupon();                    
                }
                else {
                    console.error(res.errors);
                }
            });
    }
}