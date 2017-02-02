import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LegalPersonComponent } from '../legalPerson/component/legalPerson.component';
import { LegalPersonService } from '../legalPerson/service/legalPerson.service';
import { StateService } from '../state/service/state.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'legalPerson', component: LegalPersonComponent }
        ])
    ],
    declarations: [
        LegalPersonComponent
    ],
    providers: [
        LegalPersonService, StateService
    ]
})
export class LegalPersonModule {

}