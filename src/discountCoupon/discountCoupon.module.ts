import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateDiscountCouponComponent } from '../DiscountCoupon/component/createDiscountCoupon.component';
import { EditDiscountCouponComponent } from '../DiscountCoupon/component/editDiscountCoupon.component';
import { ListDiscountCouponComponent } from '../DiscountCoupon/component/listDiscountCoupon.component';
import { DiscountCouponService } from '../DiscountCoupon/service/DiscountCoupon.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'DiscountCoupon/createDiscountCoupon', component: CreateDiscountCouponComponent },
            { path: 'DiscountCoupon/editDiscountCoupon', component: EditDiscountCouponComponent },
            { path: 'DiscountCoupon/listDiscountCoupon', component: ListDiscountCouponComponent }
        ])
    ],
    declarations: [
        CreateDiscountCouponComponent,
        EditDiscountCouponComponent,
        ListDiscountCouponComponent
    ],
    providers: [
        DiscountCouponService
    ]
})
export class DiscountCouponModule {

}