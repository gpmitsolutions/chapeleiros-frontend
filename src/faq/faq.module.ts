import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateFaqComponent } from '../faq/component/createFaq.component';
import { EditFaqComponent } from '../faq/component/editFaq.component';
import { ListFaqComponent } from '../faq/component/listFaq.component';
import { FaqService } from '../faq/service/faq.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'faq/createFaq', component: CreateFaqComponent },
            { path: 'faq/editFaq', component: EditFaqComponent },
            { path: 'faq/listFaq', component: ListFaqComponent }
        ])
    ],
    declarations: [
        CreateFaqComponent,
        EditFaqComponent,
        ListFaqComponent
    ],
    providers: [
        FaqService
    ]
})
export class FaqModule {

}