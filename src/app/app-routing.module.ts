import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { ValidarAdminGuard } from './guards/validar-admin.guard';

const routes: Routes = [
  { path: '',
  children:[
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
      ,canActivate:[ ValidarTokenGuard ],canLoad:[ValidarTokenGuard ]},

    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
      ,canActivate:[ ValidarTokenGuard,ValidarAdminGuard ],canLoad:[ValidarTokenGuard,ValidarAdminGuard]},

    { path: '**', redirectTo: '/auth' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
