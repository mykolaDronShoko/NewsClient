import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../auth/signin/auth.service';
import { SocialUser, AuthService } from 'angularx-social-login';
import { NewsService } from '../../news/news.service';
import { Router, ActivatedRoute } from '@angular/router';

import { DataStorageService } from '../../news/news-datastorage.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  
user: firebase.UserInfo[];
role: string[];
signIn: boolean;
isAdmin:boolean;
subscription: Subscription;
  constructor(
              private aService: AuthorizationService,
              private newsService: NewsService,
              private router: Router,
              private dataService: DataStorageService) {   
                  
               }

  ngOnInit() {
    this.subscription =this.aService.user.subscribe(
      (user) => {     
        if(user!==null)
          {         
            this.user = this.aService.currentUser;
          }    
      }         
    );
   
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onSignOut()
  {
    this.user=null;
    this.aService.signOut();
  }

  searchNews(s: string) {
    this.newsService.news=[];
    this.newsService.setSearchString(s);
    this.dataService.searchNews(s);
    this.router.navigate(['some/search']);
  }
}
