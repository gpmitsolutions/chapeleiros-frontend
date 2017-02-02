import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/Contact'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'editContact',
    templateUrl: '../html/editContact.component.html'
})
export class EditContactComponent {
    public currentContact: Contact = new Contact();

    constructor(private service: ContactService) {
        
    } 

    private updateContact(): void {
        this.service.put(this.currentContact.Id, this.currentContact)
            .subscribe((res) => {
                if (res.success) {
                    this.currentContact = new Contact();                
                }
                else {
                    console.error(res.errors);
                }
            })
    }
}