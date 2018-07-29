import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { News } from "../models/news.model";
import { NewsService } from "./news.service";
import { AuthorizationService } from "../auth/signin/auth.service";
import { AddCommentModel } from "../models/add-comment.model";


@Injectable()
export class DataStorageService {
  page: number;
  user: firebase.UserInfo[];
  constructor(private http: HttpClient, private newsService: NewsService, private authService: AuthorizationService) {}

  getAllNews(dataParam: string, page: number =1) {
    this.http.get<News[]>('http://cyber-news.azurewebsites.net/api/news/GetNewsByUrl/' + dataParam ,{
      observe: 'body', 
      params: new HttpParams().set('page',String(page)),
      responseType: 'json'
      }) 
      .subscribe((news: News[]) => {
        this.newsService.setNews(news);
      }, error => console.error(error));
  }

  searchNews(title: string, page: number =1) {
    this.http.get<News[]>('https://cyber-news.azurewebsites.net/api/news/Search?s='+title,{
      observe: 'body', 
      params: new HttpParams().set('page',String(page)),
      responseType: 'json'
      }) 
      .subscribe((news: News[]) => {
        this.newsService.setNews(news);
      }, error => console.error(error));
  }

  getNewsById(id: number) {
    this.http.get<News>('https://cyber-news.azurewebsites.net/api/news/' + id ,{
      observe: 'body', 
      responseType: 'json'
      })
      .subscribe((news: News) => {
        this.newsService.setOneNews(news);
      }, error => console.error(error));
  }

  addComment(comment: string, newsId: number)
  {
    this.user = this.authService.currentUser;
    var newComment: AddCommentModel={
      Id_news: newsId,
      Text: comment,
      User_name: this.user[0].displayName,
      User_img: this.user[0].photoURL
    }
      return this.http.post('https://cyber-news.azurewebsites.net/api/news/AddComment',
      newComment, {observe: 'body'});
  }
  
 
}