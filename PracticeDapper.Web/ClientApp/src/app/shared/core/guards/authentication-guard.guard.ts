import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { rejects } from 'assert';
import { Observable } from 'rxjs';
import { apiUrls } from '../constants/apiUrls';
import { BaseService } from '../services/base.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private service: BaseService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean |
    UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    var token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["signin"]);
    }
    // var tokenPromise=this.service.getP(apiUrls.user.isTokenValid);
    
    // // .subscribe(
    // //   resolve => {
    // //     return true
    // //   },
    // //   err => {
    // //     console.log(`${err.status}- ${err.statusText}`);
    // //     localStorage.removeItem("token");
    // //     this.router.navigate(["signin"]);
    // //     return false;
    // //   },
    // // );
    return true;
  }
}

@Injectable()
export class NavigationGuard implements CanActivate {
  constructor(private router: Router, private service: BaseService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean |
    UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    var token = localStorage.getItem("token");
    if (token) {
      this.router.navigate(["user"]);
    }
    return true;
    // this.service.getQ(apiUrls.user.isTokenValid).subscribe(
    //   () => {
    //     //this.router.navigate(["user"]);
    //   },
    //   err => {
    //     console.log(`${err.status}- ${err.statusText}`);
    //     localStorage.removeItem("token");
    //     this.router.navigate(["signin"]);
    //     return false;
    //   }
    // )
  }
}
