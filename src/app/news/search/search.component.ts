import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../../models/news.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../news-datastorage.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchString: string;
news: News[];
pageIndex: number=1;
subscription: Subscription;
searchSubscription: Subscription;
navigationSubscription: Subscription;
  constructor(private newsService: NewsService, 
              private dataService: DataStorageService,
              private router: Router) { 
                this.navigationSubscription = this.router.events.subscribe((e: any) => {
                  if (e instanceof NavigationEnd) {
                    this.pageIndex = 1;
                  }
                });
  }

  ngOnInit() {
    
    this.news= this.newsService.news;
    this.subscription = this.newsService.newsChanched.subscribe(
     (news: News[])=>{
        this.news = news;
     }
   );
   this.searchString = this.newsService.searchString;
   this.searchSubscription = this.newsService.searchStringChanched.subscribe(
    (search)=>{
       this.searchString = search;
    }
  );
  }

  onClick() { 
    this.pageIndex=this.pageIndex+1;
      this.dataService.searchNews(this.searchString, this.pageIndex); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.navigationSubscription.unsubscribe();
  }
}
