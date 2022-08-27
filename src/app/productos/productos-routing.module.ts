import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'comprar',component:ComprarComponent },
      { path:'carrito',component:CarritoComponent },
      { path:'**',redirectTo:'comprar' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
