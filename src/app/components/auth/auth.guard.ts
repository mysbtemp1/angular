import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServerService } from 'src/app/services/server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: ServerService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
  // canDeactivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
  //   if (this.auth.isLoggedIn()) {
  //     return false;
  //   }
  //   this.router.navigate(['/home']);
  //   return true;
  // }
  
}
