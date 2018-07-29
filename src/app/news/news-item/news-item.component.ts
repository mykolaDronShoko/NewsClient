import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() newss: News;
  param: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        
      this.param = params['news']
      }
    ); 
  }
}
