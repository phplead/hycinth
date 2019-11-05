import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    loadChildren: './admin-pages/admin-pages.module#AdminPagesModule'
  },
  {
    path: 'admin-login',
    loadChildren: './admin-pages/admin-login/admin-login.module#AdminLoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
