import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Usuario } from '../../../interfaces/respuesta.interface';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`.text-w{ color:aliceblue; }`
  ]
})
export class RegisterComponent implements OnInit{
  cargando: boolean = false;
  usuario: Usuario = {
    id: '', name: '', username: '', password: '', email: '',
    intentos: 0, image: '', createAt: new Date(), enabled: false, roles: [], idImage: ''};
  files: File[] = [];
  foto: string = '';
  idFoto: string = '';
  cambiarImagen: boolean = false;

  miFormulario: FormGroup = this.fb.group({
    email: ['julio@hotmail.com', [Validators.required, Validators.email]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
    password2: ['12345', [Validators.required, Validators.minLength(5)]],
    nombre: ['Julio', [Validators.required]],
    usuario: ['julio', [Validators.required, Validators.minLength(5)]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService,private idRoute: ActivatedRoute,private router:Router) { }

ngOnInit(): void {

}

  registro() {
    this.cargando = true;
    this.usuario.email = this.miFormulario.value.email;
    this.usuario.password = this.miFormulario.value.password;
    this.usuario.name = this.miFormulario.value.nombre;
    this.usuario.username = this.miFormulario.value.usuario;
  
      this.authService.register(this.usuario)
      .subscribe(res => {
        if (res === true) {
          Swal.fire('Felicidades!', 'Usuario creado con exito', 'success')
        } else {
          Swal.fire('Opss!', res.error.msg, 'error')
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


// if (this.idRoute.snapshot.paramMap.get('id')) {
//   this.authService.buscarUsuario(this.idRoute.snapshot.paramMap.get('id')!)
//     .subscribe(r => {
//       this.usuario = r.usuario!;
//       this.miFormulario.reset({
//         nombre: this.usuario.name, password:this.usuario.password,password2:this.usuario.password,
//         email:this.usuario.email,usuario:this.usuario.username
//       })
//     });
// }



// if(id){
//   if (this.cambiarImagen)
//   this.authService.editarImagen(this.usuario, this.usuario.id!).subscribe();
//   this.authService.editarUsuario(this.usuario, id)
//   .subscribe(resp => {
//     if (resp.ok) {
//       Swal.fire('Exito!', `Usuario ${this.usuario.username} editado con exito`, 'success');
//       this.router.navigate(['/productos/comprar']);
//     } else {
//       Swal.fire('Error, ', resp.mensaje, 'error');
//     }
//     this.cargando = false;
//   })