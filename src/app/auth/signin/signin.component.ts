import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { AuthorizationService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit { 
  constructor(private authService: AuthorizationService, 
              private rout: Router) { 
  }
 
 
signGoogle()
{
  this.authService.doGoogleLogin();
}
/* signGitHub()
{
  this.authService.doGitHubLogin();
} */
signFaceBook()
{
  this.authService.doFacebookLogin();
}
  ngOnInit() {  
  }
  
  
  
  
}
