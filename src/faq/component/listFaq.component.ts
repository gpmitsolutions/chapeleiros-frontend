import { Component, OnInit } from '@angular/core';

import { Faq } from '../models/faq'

import { FaqService } from '../service/faq.service';

@Component({
    selector: 'listFaq',
    templateUrl: '../html/listFaq.component.html'
})
export class ListFaqComponent implements OnInit {
    public faqs: Faq[] = [];

    constructor(private service: FaqService) {
        
    } 

    public ngOnInit() {        
        this.loadFaqs();
    }

    private loadFaqs(): void {
        this.faqs = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.faqs = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}