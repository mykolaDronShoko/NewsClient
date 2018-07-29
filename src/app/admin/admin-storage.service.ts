import { HttpClient, HttpParams } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";
import { CommentModel } from "../models/comment.model";
import { AdminService } from "./admin.service";

@Injectable()
export class AdminStorageService {

  constructor(private http: HttpClient, private adminService: AdminService) {}

  getAllComments(page: number = 1)
  {
    this.http.get<CommentModel[]>('https://cyber-news.azurewebsites.net/api/news/GetAllComments' ,{
        observe: 'body', 
        params: new HttpParams().set('page',String(page)),
        responseType: 'json'
        }) 
        .subscribe((comments) => {
          this.adminService.setComments(comments);
        }, error => console.error(error));
  }

  changeCommentStatus(id: number)
  {
    this.http.get<CommentModel>('https://cyber-news.azurewebsites.net/api/news/ChangeCommentStatus' ,{
        params: new HttpParams().set('id',String(id))
       
        }) 
        .subscribe((comment) => {
          this.adminService.setChangedComment(comment.Id_com)
        }, error => console.error(error));
  }
}