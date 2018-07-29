import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router"
import { NewsComponent } from "./news.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";
import { SearchComponent } from "./search/search.component";

const newsRouters: Routes = [
    {path: '', component: NewsComponent},
    {path: 'search', component: SearchComponent, runGuardsAndResolvers: 'always'},
    {path: 'detail/:id', component: NewsDetailComponent}
   
];
@NgModule({
    imports: [
        RouterModule.forChild(newsRouters)
    ],
    exports: [RouterModule]
})
export class NewsRouterModule{

}