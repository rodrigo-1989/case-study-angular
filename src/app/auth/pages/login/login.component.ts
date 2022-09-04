import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`.text-w{ color:aliceblue;  } `
  ]
})
export class LoginComponent  {

  cargando: boolean = false;
  miFormulario: FormGroup = this.fb.group({
    username: ['',[Validators.required,] ],
    password: ['',[Validators.required] ]
  });

  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router) { }

    login(){
      this.cargando = true;
      this.authService.login(this.miFormulario.value.username,this.miFormulario.value.password)
        .subscribe( resp =>{
          if(resp === true)
            this.router.navigate(['/productos']);
          else
            Swal.fire('Opss!', resp.error.error_description, 'error')
          this.cargando = false 
        })
    }

}
