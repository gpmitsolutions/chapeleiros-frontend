import { Component, OnInit } from '@angular/core';

import { Faq } from '../models/faq'
import { FaqService } from '../service/faq.service';

@Component({
    selector: 'editFaq',
    templateUrl: '../html/editFaq.component.html'
})
export class EditFaqComponent {
    public currentFaq: Faq = new Faq();

    constructor(private service: FaqService) {
        
    } 

    private updateFaq(): void {
        this.service.put(this.currentFaq.Id, this.currentFaq)
            .subscribe((res) => {
                if (res.success) {
                    this.currentFaq = new Faq();                
                }
                else {
                    console.error(res.errors);
                }
            })
    }
}