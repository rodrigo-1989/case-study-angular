import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Usuario } from '../../../interfaces/respuesta.interface';
import { AuthService } from '../../../auth/service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  get usuario() {
    return this.authService.usuario;
  }

  usuarios: Usuario[] = [];
  cargando: boolean = false;
  constructor(private adminService: AdminService, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.listarUsuario()
      .subscribe(res => {
        if (!res.ok ){
          Swal.fire('Opss!', 'Algo salio mal al cargar los usuarios', 'error');
          this.router.navigateByUrl('/productos');
        }else {
          this.usuarios = res.usuarios;
          this.usuarios = this.usuarios.filter(u => u.id !== this.usuario.id)
        }
      });
  }
  activarDesactivarUsuario(id: string) {
    this.cargando = true;
    this.adminService.activarDesactivar(id)
      .subscribe(res => {
        if (!res.ok)
          Swal.fire('Opss!', res.msg, 'error')
        this.cargando = false;
        this.ngOnInit();
      });
  }

  cambiarRol(usuario: Usuario) {
    this.cargando = true;
    this.adminService.editarRoles(usuario, usuario.id!)
      .subscribe(res => {
        if (!res.ok)
          Swal.fire('Opss!', res.error, 'error')
        this.cargando = false;
        this.ngOnInit();
      });
  }
}
