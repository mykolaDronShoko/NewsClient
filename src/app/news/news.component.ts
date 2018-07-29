import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from './news.service';
import { News } from '../models/news.model';
import { DataStorageService } from './news-datastorage.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
news: News[];
subscription: Subscription;
subscriptionPage: Subscription;
pageIndex:number;
param: string;
  constructor(private newsService: NewsService, 
              private dataService: DataStorageService, 
              private route: ActivatedRoute) { 
               }

  ngOnInit() {
  this.route.params.subscribe(
    (params: Params) => {
      this.param = params['news'];
     this.newsService.news=[];
     this.pageIndex = 1;
     this.dataService.getAllNews(params['news']);
    
    }
  ); 
    this.news= this.newsService.news;
    this.subscription = this.newsService.newsChanched.subscribe(
     (news: News[])=>{
        this.news = news;
     }
   );  
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onClick() { 
    this.pageIndex=this.pageIndex+1;
      this.dataService.getAllNews(this.param, this.pageIndex); 
  }
}
