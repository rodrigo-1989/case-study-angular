import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { HomeComponent } from './pages/home/home.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { PedidoDetalladoComponent } from './pages/pedido-detallado/pedido-detallado.component';

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path:'listar',component:ListarProductosComponent },
      { path:'editar/:id',component:NuevoProductoComponent },
      { path:'nuevo',component:NuevoProductoComponent },
      { path:'pedido',component:PedidoComponent},
      { path:'pedido-detallado/:id',component: PedidoDetalladoComponent},
      { path:'**',redirectTo:'listar' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
