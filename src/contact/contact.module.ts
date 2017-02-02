import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateContactComponent } from '../Contact/component/createContact.component';
import { EditContactComponent } from '../Contact/component/editContact.component';
import { ListContactComponent } from '../Contact/component/listContact.component';
import { ContactService } from '../Contact/service/contact.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Contact/createContact', component: CreateContactComponent },
            { path: 'Contact/editContact', component: EditContactComponent },
            { path: 'Contact/listContact', component: ListContactComponent }
        ])
    ],
    declarations: [
        CreateContactComponent,
        EditContactComponent,
        ListContactComponent
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule {

}