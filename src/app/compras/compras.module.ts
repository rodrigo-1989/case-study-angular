import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { ComprasRoutingModule } from './compras-routing.module';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidoDetalladoComponent } from './pages/pedido-detallado/pedido-detallado.component';


@NgModule({
  declarations: [
    ListarProductosComponent,
    NuevoProductoComponent,
    HomeComponent,
    PedidoComponent,
    PedidoDetalladoComponent,
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
