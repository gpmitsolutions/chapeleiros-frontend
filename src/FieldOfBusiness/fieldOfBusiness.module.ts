import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FieldOfBusinessComponent } from '../FieldOfBusiness/component/FieldOfBusiness.component';
import { FieldOfBusinessService } from '../FieldOfBusiness/service/FieldOfBusiness.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'fieldOfBusiness', component: FieldOfBusinessComponent }
        ])
    ],
    declarations: [
        FieldOfBusinessComponent
    ],
    providers: [
        FieldOfBusinessService
    ]
})
export class FieldOfBusinessModule {

}