import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateNewsComponent } from '../News/component/createNews.component';
import { EditNewsComponent } from '../News/component/editNews.component';
import { ListNewsComponent } from '../News/component/listNews.component';
import { NewsService } from '../News/service/News.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'News/createNews', component: CreateNewsComponent },
            { path: 'News/editNews', component: EditNewsComponent },
            { path: 'News/listNews', component: ListNewsComponent }
        ])
    ],
    declarations: [
        CreateNewsComponent,
        EditNewsComponent,
        ListNewsComponent
    ],
    providers: [
        NewsService
    ]
})
export class NewsModule {

}