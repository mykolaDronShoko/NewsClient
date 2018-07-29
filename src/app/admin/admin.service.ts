import { HttpClient, HttpParams } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { CommentModel } from "../models/comment.model";
import { Subject } from "../../../node_modules/rxjs";

@Injectable()
export class AdminService {
comments: CommentModel[];
commentsChanged = new Subject<CommentModel[]>();
  constructor() {}

  setComments(comments: CommentModel[]) {
      this.comments = comments;
      this.commentsChanged.next(this.comments.slice());
  }

  setChangedComment(id:number) {
      for(let i of this.comments)
      {
          if(i.Id_com===id)
          {
              i.Active=!i.Active;
          }
      }
    this.commentsChanged.next(this.comments.slice());
}
}