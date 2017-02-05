import { Component, OnInit } from '@angular/core';

import { DiscountCoupon } from '../models/DiscountCoupon'
import { DiscountCouponService } from '../service/DiscountCoupon.service';

@Component({
    selector: 'listDiscountCoupon',
    templateUrl: '../html/listDiscountCoupon.component.html'
})
export class ListDiscountCouponComponent implements OnInit {
    public discountCoupons: DiscountCoupon[] = [];

    constructor(private service: DiscountCouponService) {
        
    } 

    public ngOnInit() {        
        this.loadDiscountCoupon();
    }

    private loadDiscountCoupon(): void {
        this.discountCoupons = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.discountCoupons = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}