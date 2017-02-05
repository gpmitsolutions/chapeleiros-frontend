import { Component, OnInit } from '@angular/core';

import { News } from '../models/News'

import { NewsService } from '../service/News.service';

@Component({
    selector: 'listNews',
    templateUrl: '../html/listNews.component.html'
})
export class ListNewsComponent implements OnInit {
    public news: News[] = [];

    constructor(private service: NewsService) {
        
    } 

    public ngOnInit() {        
        this.loadNews();
    }

    private loadNews(): void {
        this.news = [];
        this.service.list()
            .subscribe((res) => {
                if (res.success) {
                    this.news = res.result;
                } else {
                    console.error(res.errors);
                }
            });
    }
}