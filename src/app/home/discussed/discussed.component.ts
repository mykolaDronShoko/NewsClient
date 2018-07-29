import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discussed',
  templateUrl: './discussed.component.html',
  styleUrls: ['./discussed.component.css']
})
export class DiscussedComponent implements OnInit {
  news: News[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<News[]>('http://cyber-news.azurewebsites.net/api/news/GetMostDiscussedNews',{
      observe: 'body', 
      responseType: 'json'
      })
      .subscribe((news: News[]) => {
        this.news = news;
      }, error => console.error(error));
  }

}
