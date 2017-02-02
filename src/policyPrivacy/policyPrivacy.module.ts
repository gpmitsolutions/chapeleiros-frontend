import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PolicyPrivacyComponent } from '../PolicyPrivacy/component/PolicyPrivacy.component';
import { PolicyPrivacyService } from '../PolicyPrivacy/service/PolicyPrivacy.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'policyPrivacy', component: PolicyPrivacyComponent }
        ])
    ],
    declarations: [
        PolicyPrivacyComponent
    ],
    providers: [
        PolicyPrivacyService
    ]
})
export class PolicyPrivacyModule {

}