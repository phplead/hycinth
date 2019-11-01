import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../pages/auth/authentication.service';
import { Role } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.auth.currentUserValue;
      if (currentUser) {
          // check if route is restricted by role   
          if (currentUser.role === Role.User) {
            return true;
        }
          this.router.navigate(['/']);
          return false;
      }
    
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
  
}
