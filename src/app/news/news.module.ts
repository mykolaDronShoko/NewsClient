import { NgModule } from "@angular/core";
import { NewsItemComponent } from "./news-item/news-item.component";
import { NewsComponent } from "./news.component";
import { NewsRouterModule } from "./news-router.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule} from "@angular/forms";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { RandomNewsComponent } from "./random-news/random-news.component";
import { SearchComponent } from "./search/search.component";
@NgModule({
    declarations:[
        NewsComponent,
        NewsItemComponent,
        NewsDetailComponent,
        RandomNewsComponent,
        SearchComponent
    ],
    exports: [],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        NewsRouterModule
      
    ]
    
})
export class NewsModule {

}