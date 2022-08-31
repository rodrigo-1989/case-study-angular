import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ListarProductosComponent,
    NuevoProductoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
