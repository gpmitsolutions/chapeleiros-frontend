import { Component, OnInit } from '@angular/core';

import { News } from '../models/News'
import { NewsService } from '../service/News.service';

@Component({
    selector: 'editNews',
    templateUrl: '../html/editNews.component.html'
})
export class EditNewsComponent {
    public currentNews: News = new News();

    constructor(private service: NewsService) {
        
    } 

    private updateContact(): void {
        this.service.put(this.currentNews.Id, this.currentNews)
            .subscribe((res) => {
                if (res.success) {
                    this.currentNews = new News();                
                }
                else {
                    console.error(res.errors);
                }
            })
    }
}