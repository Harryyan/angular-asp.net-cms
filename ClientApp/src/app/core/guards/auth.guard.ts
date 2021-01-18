import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../services/global/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot,routerStateSnapshot: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: routerStateSnapshot.url } });
    return false;
  }
}