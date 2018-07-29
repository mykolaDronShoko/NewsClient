import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthorizationService } from "../signin/auth.service";


@Injectable()
export class SignInGuard implements CanActivate{
    
    constructor(private aService: AuthorizationService) {
       
    }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):boolean{
     let signin = this.aService.isAuthenticated();
       if(!signin)
       {
           return true;
       }
       else
       {
           return false;
       }
    }
}