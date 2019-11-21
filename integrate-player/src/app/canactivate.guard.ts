import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate {
  constructor(private myroute:Router,private myauth:AuthenticateService){}
  canActivate(){

    if(!this.myauth.isTokenExpired()){

      console.log('Active');

      return true;

    }

  
    return false;

  }  
 /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token=window.localStorage.getItem('bearerToken');
      if(!token){
        this.myroute.navigate(['loginpage']);
      }
      else{
      return true;
      
       }
      }
  */
}
