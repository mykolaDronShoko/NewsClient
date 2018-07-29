import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { NewsService } from "../news.service";
import { News } from "../../models/news.model";
import { DataStorageService } from "../news-datastorage.service";
import { Subscription } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthorizationService } from "../../auth/signin/auth.service";


@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css']
  })
export class NewsDetailComponent implements OnInit, OnDestroy{
  
  news: News;
  Id_news: number
  loadSucces:boolean = false;;
  user: firebase.UserInfo[];
  subscription: Subscription;
  commentSended: boolean = false;
  commentForm: FormGroup;
  constructor(private route: ActivatedRoute, 
    private newsService: NewsService, 
    private dataStorage: DataStorageService, 
    private authSrvice: AuthorizationService,
    private http: HttpClient) {
    }
    ngOnInit() {
    
      this.route.params.subscribe(
        (params: Params) => {
          this.Id_news = +params['id'];
         this.dataStorage.getNewsById(params['id']);
         this.news= this.newsService.oneNews;
        }
      );     
      this.subscription = this.newsService.oneNewsChanched.subscribe(
       (news: News)=>{
          this.news = news;
          if(this.news!==null)
          {
            this.loadSucces=true;
          }
       }
     );
    
      this.user = this.authSrvice.currentUser; 

      this.commentForm= new FormGroup({
        'comment': new FormControl("", [Validators.required, this.signIn.bind(this)]),
      });
    }

signIn(control: FormControl): {[s:string]: boolean} {
    if(this.user===null)
        {
          return {'noSignIn': false};
        }
        return null; }   

onAddComment()
{ 
  let value = this.commentForm.value['comment'];
  this.dataStorage.addComment(value, this.Id_news)
  .subscribe(
    (response) => {
      this.commentSended=true;
    }, error => console.error(error)
  ); 
}

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}

