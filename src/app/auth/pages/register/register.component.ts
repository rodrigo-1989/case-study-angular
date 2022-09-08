import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../../../interfaces/respuesta.interface';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`.text-t{  color:#a64bf4; -webkit-text-stroke: 0.5px aliceblue;} .text-m{  color:#a64bf4; }`
  ]
})
export class RegisterComponent{
  cargando: boolean = false;
  usuario: Usuario = {
    id: '', name: '', username: '', password: '', email: '',
    intentos: 0, image: '', createAt: new Date(), enabled: false, roles: [], idImage: ''};
  files: File[] = [];
  foto: string = '';
  idFoto: string = '';
  cambiarImagen: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    email: ['usuario@hotmail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
    password2: ['12345', [Validators.required, Validators.minLength(5)]],
    nombre: ['usuario', [Validators.required]],
    usuario: ['usuario', [Validators.required, Validators.minLength(5)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService,private idRoute: ActivatedRoute,private router:Router) { }

  registro() {
    this.cargando = true;
    this.usuario.email = this.miFormulario.value.email;
    this.usuario.password = this.miFormulario.value.password;
    this.usuario.name = this.miFormulario.value.nombre;
    this.usuario.username = this.miFormulario.value.usuario;
  
      this.authService.register(this.usuario)
      .subscribe(res => {
        if (res.ok ) {
          Swal.fire('Felicidades!', 'Usuario creado con exito', 'success')
          this.router.navigateByUrl('/auth/login')
        } else {
          Swal.fire('Opss!', res.mensaje, 'error')
        }
        this.cargando = false;
      });
  }

  verificarPassword() {
    (this.miFormulario.get('password')?.value === this.miFormulario.get('password2')?.value)
      ? this.miFormulario.get('password2')?.setErrors(null)
      : this.miFormulario.get('password2')?.setErrors({ noEsIgual: true });
  }
}
