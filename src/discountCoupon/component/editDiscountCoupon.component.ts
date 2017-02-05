import { Component, OnInit } from '@angular/core';

import { DiscountCoupon } from '../models/DiscountCoupon'

import { DiscountCouponService } from '../service/DiscountCoupon.service';

@Component({
    selector: 'editDiscountCoupon',
    templateUrl: '../html/editDiscountCoupon.component.html'
})
export class EditDiscountCouponComponent {
    public currentDiscountCoupon: DiscountCoupon = new DiscountCoupon();

    constructor(private service: DiscountCouponService) {
        
    } 

    private updateDiscountCoupon(): void {
        this.service.put(this.currentDiscountCoupon.Id, this.currentDiscountCoupon)
            .subscribe((res) => {
                if (res.success) {
                    this.currentDiscountCoupon = new DiscountCoupon();                
                }
                else {
                    console.error(res.errors);
                }
            })
    }
}