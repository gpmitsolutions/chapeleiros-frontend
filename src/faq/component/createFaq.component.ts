import { Component, OnInit } from '@angular/core';

import { Faq } from '../models/faq'
import { FaqService } from '../service/faq.service';

@Component({
    selector: 'createFaq',
    templateUrl: '../html/createFaq.component.html'
})
export class CreateFaqComponent {
    public currentFaq: Faq = new Faq();

    constructor(private service: FaqService) {
        
    }  

    private saveNewFaq(): void {
        console.log(this.currentFaq);
        this.service.post(this.currentFaq)
            .subscribe((res) => {
                if (res.success) {
                    this.currentFaq = new Faq();                    
                }
                else {
                    console.error(res.errors);
                }
            });
    }
}