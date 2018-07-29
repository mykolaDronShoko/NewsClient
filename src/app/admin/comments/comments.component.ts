import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommentModel } from '../../models/comment.model';
import { Subscription } from '../../../../node_modules/rxjs';
import { AdminStorageService } from '../admin-storage.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
comments: CommentModel[];
subscription: Subscription;
  constructor(private adminService: AdminService, private dataService: AdminStorageService) { }

  ngOnInit() {
    this.dataService.getAllComments();
    this.comments = this.adminService.comments;
    this.subscription = this.adminService.commentsChanged.subscribe((comment)=>{
    this.comments = comment;
    });
  }
  statusChanged(id: number) {
    this.dataService.changeCommentStatus(id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }
}
