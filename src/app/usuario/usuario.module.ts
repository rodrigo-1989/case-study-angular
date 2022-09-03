import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { EditarComponent } from './editar/editar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  
    EditarComponent,
       HomeComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class UsuarioModule { }
