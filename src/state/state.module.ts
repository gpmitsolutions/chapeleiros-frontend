import { NgModule } from '@angular/core'
import {RouterModule} from '@angular/router'

import { StateComponent } from '../state/component/state.component';
import { StateService } from '../state/service/state.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'physicalPerson', component: StateComponent }
        ])
    ],
    declarations: [
        StateComponent
    ],
    providers: [
        StateService
    ]
})

export class StateModule {

}