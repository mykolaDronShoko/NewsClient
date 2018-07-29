import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { AdminComponent } from './admin.component';
import { CommentsComponent } from './comments/comments.component';
const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: '', component: CommentsComponent}, 
      {path: 'comments', component: CommentsComponent}     
  ]}  
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
exports: [RouterModule]
})
export class AdminRouterModule { }
