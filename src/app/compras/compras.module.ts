import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarProductosComponent,
    NuevoProductoComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ]
})
export class ComprasModule { }
