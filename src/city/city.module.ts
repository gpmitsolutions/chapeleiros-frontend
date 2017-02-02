import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { CityComponent } from '../city/component/city.component';
import { CityService } from '../city/service/city.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'physicalPerson', component: CityComponent }
        ])
    ],
    declarations: [
        CityComponent
    ],
    providers: [
        CityService
    ]
})

export class CityModule {

}