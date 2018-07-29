import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewsService } from './news/news.service';
import { AppRoutingModule } from './app-router.module';
import { DataStorageService } from './news/news-datastorage.service';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthorizationService } from './auth/signin/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInGuard } from './auth/guard/signin.guard';
import { HomeModule } from './home/home.module';
import { AdminService } from './admin/admin.service';
import { AdminStorageService } from './admin/admin-storage.service';
import { AdminGuard } from './auth/guard/admin.guard';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [NewsService, DataStorageService, 
  AuthorizationService, SignInGuard, AdminGuard, AdminService, AdminStorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
