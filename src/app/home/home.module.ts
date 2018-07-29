import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussedComponent } from './discussed/discussed.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-router.module';
import { StartComponent } from './start/start.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [DiscussedComponent],
  declarations: [
    DiscussedComponent,
    MostViewedComponent,
    StartComponent,
    HomeComponent
  ]
})
export class HomeModule { }
