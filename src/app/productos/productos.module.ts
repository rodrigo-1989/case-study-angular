import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProductosRoutingModule } from './productos-routing.module';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TarjetaProductoComponent } from './components/tarjeta-producto/tarjeta-producto.component';
import { TarjetaCarritoComponent } from './components/tarjeta-carrito/tarjeta-carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PedidosComponent } from './pages/pedidos/pedidos.component';


@NgModule({
  declarations: [
    ComprarComponent,
    CarritoComponent,
    TarjetaProductoComponent,
    TarjetaCarritoComponent,
    HomeComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProductosModule { }
