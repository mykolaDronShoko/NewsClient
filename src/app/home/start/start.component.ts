import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
news: News[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<News[]>('http://cyber-news.azurewebsites.net/api/news/GetNewest',{
      observe: 'body', 
      responseType: 'json'
      })
      .subscribe((news: News[]) => {
        this.news = news;
      }, error => console.error(error));
  }

}
