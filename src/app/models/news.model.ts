import { ImageModel } from "./image.model";
import { CommentModel } from "./comment.model";

 export interface News {
     Id_news: number;
     Title: string;
     Description: string;
     VideoUrl: string;
     DateAdded: Date;
     Rank: string;
     Active: boolean;
     Id_cat: number;
     Images: ImageModel[];
     Comments: CommentModel[];
  


}