import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(): Observable<boolean> | boolean {
    if(localStorage.getItem('token'))
      return true;
    else{
      this.router.navigateByUrl('/auth')
      return false
    }

  }
  canLoad(): Observable<boolean> | boolean{
    if(localStorage.getItem('token'))
      return true;
    else{
      this.router.navigateByUrl('/auth')
      return false
    }
  }
}
