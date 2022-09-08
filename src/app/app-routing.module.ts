import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarAdminGuard } from './guards/validar-admin.guard';
import { ValidarUserGuard } from './guards/validar-user.guard';
import { ValidarComprasGuard } from './guards/validar-compras.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
      {
        path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule )
        , canActivate: [ValidarUserGuard], canLoad: [ValidarUserGuard]
      },
      {
        path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule )
        , canActivate: [ValidarUserGuard], canLoad: [ValidarUserGuard]
      },
      {
        path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule )
        , canActivate: [ValidarComprasGuard], canLoad: [ValidarComprasGuard]
      },
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        , canActivate: [ValidarAdminGuard], canLoad: [ValidarAdminGuard]
      },
      {
        path: 'shared', loadChildren: () => import('./shared/shared-routing.module').then(m => m.SharedRoutingModule)
        , canActivate: [ValidarUserGuard], canLoad: [ValidarUserGuard]
      },

      { path: '**', redirectTo: '/auth/listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
