import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent  {
  get usuario(){
    return this.authService.usuario;
  }

  constructor(private authService:AuthService, private router:Router) { }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl('/auth');
  }
}
