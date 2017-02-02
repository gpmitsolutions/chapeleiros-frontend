import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PhysicalPersonComponent } from '../physicalPersonApp/component/physicalPerson.component';
import { PhysicalPersonService } from '../physicalPersonApp/service/physicalPerson.service';
import { StateService } from '../state/service/state.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'physicalPersonApp', component: PhysicalPersonComponent }
        ])
    ],
    declarations: [
        PhysicalPersonComponent
    ],
    providers: [
        PhysicalPersonService, StateService
    ]
})
export class PhysicalPersonModule {

}