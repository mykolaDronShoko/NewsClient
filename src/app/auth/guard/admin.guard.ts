import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthorizationService } from "../signin/auth.service";


@Injectable()
export class AdminGuard implements CanActivate{
    constructor(private aService: AuthorizationService) {
       
    }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):boolean{
     let signin=this.aService.isAdmin();
       if(signin)
       {
           return true;
       }
       else
       {
           return false;
       }
    }
}