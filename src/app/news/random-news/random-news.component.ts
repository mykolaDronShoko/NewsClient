import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-news',
  templateUrl: './random-news.component.html',
  styleUrls: ['./random-news.component.css']
})
export class RandomNewsComponent implements OnInit {

  constructor(private http: HttpClient, 
              private rout: Router, 
              private activeRout: ActivatedRoute) { }
  news: News[];
  ngOnInit() {
    this.http.get<News[]>('https://cyber-news.azurewebsites.net/api/news/GetRandomNews',{
      observe: 'body', 
      responseType: 'json'
      })
      .subscribe((news: News[]) => {
        this.news = news;
      }, error => console.error(error));
  }
  navigateTo(id: number) {
   this.rout.navigate(['/all/detail',id],{relativeTo: this.activeRout});
  }
}
