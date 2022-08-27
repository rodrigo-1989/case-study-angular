import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';

import { AdminRoutingModule } from './admin-routing.module';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarProductoComponent,
    ListarProductosComponent,
    NuevoProductoComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
