import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/Contact'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'createContact',
    templateUrl: '../html/createContact.component.html'
})
export class CreateContactComponent {
    public currentContact: Contact = new Contact();

    constructor(private service: ContactService) {
        
    }  

    private saveNewContact(): void {
        console.log(this.currentContact);
        
        this.service.post(this.currentContact)
            .subscribe((res) => {
                if (res.success) {
                    this.currentContact = new Contact();                    
                }
                else {
                    console.error(res.errors);
                }
            });
    }
}