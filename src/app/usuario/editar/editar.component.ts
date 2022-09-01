import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../interfaces/respuesta.interface';
import { UsuarioServiceService } from '../usuario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [
  ]
})
export class EditarComponent {
  get usuario() {
    return this.authService.usuario;
  }
  cargando: boolean = false;
  files: File[] = [];
  foto: string = '';
  idFoto: string = '';
  cambiarImagen: boolean = false;
  user: Usuario = {
    id: this.usuario.id, name: '', username: this.usuario.usuario, password: null, email: this.usuario.correo, image: null
    , intentos: 0, createAt: new Date(), enabled: true, roles: this.usuario.rol, idImage: null
  };

  miFormulario: FormGroup = this.fb.group({
    password: ['',],
    password2: ['',],
    nombre: [this.usuario.nombre, [Validators.required]],
  });
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private usuarioService: UsuarioServiceService) { }

  verificarPassword() {
    (this.miFormulario.get('password')?.value.length > 0 && this.miFormulario.get('password')?.value.length < 5)
      ? this.miFormulario.get('password')?.setErrors({ contrasenaCorta: true })
      : this.miFormulario.get('password')?.setErrors(null);
    (this.miFormulario.get('password2')?.value.length > 0 && this.miFormulario.get('password2')?.value.length < 5)
      ? this.miFormulario.get('password2')?.setErrors({ contrasenaCorta: true })
      : this.miFormulario.get('password2')?.setErrors(null);
    (this.miFormulario.get('password')?.value === this.miFormulario.get('password2')?.value)
      ? this.miFormulario.get('password2')?.setErrors(null)
      : this.miFormulario.get('password2')?.setErrors({ noEsIgual: true });
  }


  editar() {
    this.cargando = true;
    this.user.name = this.miFormulario.value.nombre;
    this.user.password = this.miFormulario.value.password;
    if (this.cambiarImagen) {
      this.user.image = this.foto;
      this.user.idImage = this.idFoto;
    }
    this.usuarioService.editarUsuario(this.user, this.usuario.id)
      .subscribe(resp => {
        if (resp.ok) {
          Swal.fire('Exito!', `Usuario ${this.usuario.nombre} editado con exito`, 'success');
          const { id, name, username, image, roles, email } = resp.usuario;
          this.usuario.id = id; this.usuario.usuario = username; this.usuario.nombre = name;
          this.usuario.imagen = image; this.usuario.rol = roles; this.usuario.correo = email;
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          this.router.navigate(['/productos/comprar']);
        } else {
          Swal.fire('Error, ', resp.mensaje, 'error');
        }
        this.cargando = false;
      });
  }

  subirImagen() {
    this.cargando = true;
    if (!this.idFoto) {
      if (!this.files[0]) {
        this.cargando = false;
        return;
      }
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'g29k4pwe');
      data.append('cloud_name', 'djxpuwlz0');
      this.usuarioService.subirImagen(data)
        .subscribe(res => {
          this.foto = res.url;
          this.idFoto = res.public_id;
          this.cargando = false;
        });
    } else {
      this.cargando = false;
    }
  }

  seleccionaImagen(event: any) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1)
      this.files.shift();
  }
  quitarImagen(f: File) {
    this.cargando = true;
    this.files.splice(this.files.indexOf(f), 1);
    if (this.idFoto)
      this.usuarioService.eliminarImagen(this.idFoto).subscribe(console.log);
    this.foto = '';
    this.idFoto = '';
    this.cargando = false;
    this.cambiarImagen = false;
  }

  cambiar() {
    this.cambiarImagen = true;
  }
}
