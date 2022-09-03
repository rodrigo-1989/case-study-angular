import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { UsuarioCardComponent } from './components/usuario-card/usuario-card.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    HomeComponent,
    UsuarioCardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class AdminModule { }
