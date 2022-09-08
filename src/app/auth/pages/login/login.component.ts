import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`.text-t{  color:#a64bf4; -webkit-text-stroke: 0.5px aliceblue;} .text-m{  color:#a64bf4; }`
  ]
})
export class LoginComponent {

  cargando: boolean = false;
  miFormulario: FormGroup = this.fb.group({
    username: ['', [Validators.required,]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  login() {
    this.cargando = true;
    this.authService.login(this.miFormulario.value.username, this.miFormulario.value.password)
      .subscribe(resp => {
        if (resp === true)
          this.router.navigate(['/productos']);
        this.cargando = false
      })
  }

}
