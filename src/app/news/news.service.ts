import { News } from "../models/news.model";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class NewsService {

    constructor(private route: ActivatedRoute) { }
    newsChanched = new Subject<News[]>();
    oneNewsChanched = new Subject<News>();
    searchStringChanched = new Subject<string>();
    news: News[]=[];
    oneNews: News;
    searchMode: boolean = false;
    searchString: string;
    setNews(news: News[]){ 
        this.news.push(...news);
        this.newsChanched.next(this.news.slice());
    }

    setOneNews(news: News) {
      this.oneNews = news;
      this.oneNewsChanched.next(this.oneNews);
    }

    setSearchString(s: string){
        this.searchString = s;
        this.searchStringChanched.next(this.searchString);
    }   
}