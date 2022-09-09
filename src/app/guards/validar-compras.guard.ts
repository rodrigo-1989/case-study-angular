import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarComprasGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    if(this.authService.usuario !== null){
      if (this.authService.usuario.rol.includes('ROLE_COMPRAS'))
        return true;
      else {
        this.router.navigateByUrl('/productos/comprar')
        return false
      }
    }else{
      this.router.navigateByUrl('/auth/login')
      return false;
    }
  }
  canLoad(): Observable<boolean> | boolean {
    if(this.authService.usuario !== null){
      if (this.authService.usuario.rol.includes('ROLE_COMPRAS'))
        return true;
      else {
        this.router.navigateByUrl('/productos/comprar')
        return false
      }
    }else{
      this.router.navigateByUrl('/auth/login')
      return false;
    }
  }
}
