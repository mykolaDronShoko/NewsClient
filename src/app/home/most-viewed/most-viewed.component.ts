import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.css']
})
export class MostViewedComponent implements OnInit {

  news: News[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<News[]>('http://cyber-news.azurewebsites.net/api/news/GetMostViewedNews',{
      observe: 'body', 
      responseType: 'json'
      })
      .subscribe((news: News[]) => {
        this.news = news;
      }, error => console.error(error));
  }

}
