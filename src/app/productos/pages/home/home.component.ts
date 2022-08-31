import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  get usuario(){
    return this.authService.usuario;
  }
  constructor(private router:Router,private authService:AuthService) { }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/auth');
  }
}
