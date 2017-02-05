import { Component, OnInit } from '@angular/core';

import { News } from '../models/News'

import { NewsService } from '../service/News.service';

@Component({
    selector: 'createNews',
    templateUrl: '../html/createNews.component.html'
})
export class CreateNewsComponent {
    public currentNews: News = new News();

    constructor(private service: NewsService) {
        
    }  

    private saveNewNews(): void {
        console.log(this.currentNews);
        
        this.service.post(this.currentNews)
            .subscribe((res) => {
                if (res.success) {
                    this.currentNews = new News();                    
                }
                else {
                    console.error(res.errors);
                }
            });
    }
}