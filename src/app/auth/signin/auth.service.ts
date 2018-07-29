import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AddUserModel } from "../../models/add-user.model";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "../../../../node_modules/rxjs";
import { Router } from "../../../../node_modules/@angular/router";


@Injectable()
export class AuthorizationService {
  role: string[]=[];
  user: Observable<firebase.User>;
  currentUser:firebase.UserInfo[]=null;
  constructor( private router: Router,
              private http: HttpClient,
              private afAuth: AngularFireAuth,
             ) { 
              this.user= this.afAuth.authState;
              this.user.subscribe(
                (user) => {
                  if (user!==null) {
                    this.currentUser = user.providerData;
                    this.addUserToDB(this.currentUser)
                  }
                  else {
                    this.currentUser = null;
                  }
                }
              );          
  }

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.router.navigate(['/']);
        resolve(res);
      }, err => {
        
        console.log(err);
        reject(err);
      })
    })
 }

 doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
     this.router.navigate(['/']);
      resolve(res);
    })
  })
}

/* doGitHubLogin(){
  return new Promise<any>((resolve, reject) => {
    let provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('profile');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      console.log(res.user.providerData);
      resolve(res);
    })
  })
} */


signOut(){
  this.afAuth.auth.signOut()
  .then((res) => this.router.navigate(['/']));;
}

addUserToDB(user: firebase.UserInfo[])
  {
    let newUser: AddUserModel={
      Name : user[0].displayName,
      Email: user[0].email,
      imgUrl: user[0].photoURL
    }
    return this.http.post<string[]>("https://cyber-news.azurewebsites.net/api/account/AddUser", newUser).subscribe(
      (response: string[])=>{
        this.role = response;   
        console.log(this.role);         
      }
    );
  }

  isAuthenticated(): boolean {
    if (this.currentUser === null ) {
      return false;
    } else {
      return true;
    }
  }

  isAdmin(): boolean {
    let f= this.role.some(x => x === "Admin");
    if(f)
    {
      return true;
    }
    else
    {
      return false;
    }
      
    
  } 

  
}