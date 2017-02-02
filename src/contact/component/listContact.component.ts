import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/Contact'
import { State } from '../../state/models/state';
import { City } from '../../city/models/city';
import { ContactService } from '../service/contact.service';

@Component({
    selector: 'listContact',
    templateUrl: '../html/listContact.component.html'
})
export class ListContactComponent implements OnInit {
    public contacts: Contact[] = [];

    constructor(private service: ContactService) {
        
    } 

    public ngOnInit() {        
        this.loadContacts();
    }

    private loadContacts(): void {
        this.contacts = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.contacts = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}