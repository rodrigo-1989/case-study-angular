import { Component, Input, EventEmitter, Output, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Usuario } from '../../../interfaces/respuesta.interface';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styles: [`.example-section {margin: 0 0;}`
  ]
})
export class UsuarioCardComponent implements AfterContentInit {

  @Input() usuario!: Usuario;
  @Input() cargando: boolean = false;
  @Output() onActiveDesactive: EventEmitter<string> = new EventEmitter();
  @Output() onCambiarRol: EventEmitter<Usuario> = new EventEmitter();
  cambioRol: boolean = false;
  roles = this.fb.group({ user: false, compras: false, admin: false, });
  constructor(private fb: FormBuilder) { }

  ngAfterContentInit() {
    this.roles.reset({user: this.usuario.roles.includes('ROLE_USER'),
      compras: this.usuario.roles.includes('ROLE_COMPRAS'),
      admin: this.usuario.roles.includes('ROLE_ADMIN'),
    })
    this.roles.get('user')?.disable();
  }
  activarDesactivar() {
    this.onActiveDesactive.emit(this.usuario.id!);
  }

  enviarNuevoRol() {
    if (this.roles.get('compras')?.value && !this.usuario.roles.includes('ROLE_COMPRAS'))
      this.usuario.roles.push('ROLE_COMPRAS')
    if (!this.roles.get('compras')?.value && this.usuario.roles.includes('ROLE_COMPRAS'))
      this.usuario.roles = this.usuario.roles.filter(r => r !== 'ROLE_COMPRAS')
    if (this.roles.get('admin')?.value && !this.usuario.roles.includes('ROLE_ADMIN'))
      this.usuario.roles.push('ROLE_ADMIN')
    if (!this.roles.get('admin')?.value && this.usuario.roles.includes('ROLE_ADMIN'))
      this.usuario.roles = this.usuario.roles.filter(r => r !== 'ROLE_ADMIN')
    this.onCambiarRol.emit(this.usuario);
  }
  editarRol() {
    this.cambioRol = true;
  }
}