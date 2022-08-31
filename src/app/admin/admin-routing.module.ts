import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './pages/listar-productos/listar-productos.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path:'listar',component:ListarProductosComponent },
      { path:'editar/:id',component:NuevoProductoComponent },
      { path:'nuevo',component:NuevoProductoComponent },
      { path:'**',redirectTo:'listar' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
