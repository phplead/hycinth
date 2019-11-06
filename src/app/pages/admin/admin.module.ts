import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminGuard } from './../../guards';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    loadChildren: './admin-pages/admin-pages.module#AdminPagesModule',
    canActivate: [ AdminGuard ]
  },
  {
    path: 'admin-login',
    loadChildren: './admin-pages/admin-login/admin-login.module#AdminLoginModule'
  },
  {
    path: 'admin-password',
    loadChildren: './admin-pages/admin-password/admin-password.module#AdminPasswordModule'
  },
  {
    path: 'admin-error',
    loadChildren: './admin-pages/admin-error/admin-error.module#AdminErrorModule'
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
