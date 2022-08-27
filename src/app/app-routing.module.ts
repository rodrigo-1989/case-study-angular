import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component:AppComponent,
  children:[
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: '**', redirectTo: 'productos' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
