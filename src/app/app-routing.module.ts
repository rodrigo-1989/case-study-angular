import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
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
        , canActivate: [ValidarTokenGuard, ValidarUserGuard], canLoad: [ValidarTokenGuard, ValidarUserGuard]
      },
      {
        path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule )
        , canActivate: [ValidarTokenGuard, ValidarUserGuard], canLoad: [ValidarTokenGuard, ValidarUserGuard]
      },
      {
        path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule )
        , canActivate: [ValidarTokenGuard, ValidarComprasGuard], canLoad: [ValidarTokenGuard, ValidarComprasGuard]
      },
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        , canActivate: [ValidarTokenGuard, ValidarAdminGuard], canLoad: [ValidarTokenGuard, ValidarAdminGuard]
      },
      {
        path: 'shared', loadChildren: () => import('./shared/shared-routing.module').then(m => m.SharedRoutingModule)
        , canActivate: [ValidarUserGuard], canLoad: [ValidarUserGuard]
      },

      { path: '**', redirectTo: '/auth' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
