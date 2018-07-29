import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { AdminRouterModule } from './admin-router.module';
import { AdminComponent } from './admin.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRouterModule
  ],
  declarations: [CommentsComponent, AdminComponent]
})
export class AdminModule { }
