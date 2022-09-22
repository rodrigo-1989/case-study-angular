import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [
      { path:'comprar',component:ComprarComponent },
      { path:'carrito',component:CarritoComponent },
      { path:'pedidos',component:PedidosComponent},
      { path:'**',redirectTo:'comprar' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
