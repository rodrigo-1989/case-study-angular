import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarAdminGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.usuario.rol.includes('ROLE_ADMIN'))
      return true;
    else {
      this.router.navigateByUrl('/productos')
      return false
    }

  }
  canLoad(): Observable<boolean> | boolean {
    if (this.authService.usuario.rol.includes('ROLE_ADMIN'))
      return true;
    else {
      this.router.navigateByUrl('/productos')
      return false
    }
  }
}
