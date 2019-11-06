import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminForgotPasswordComponent } from './admin-forgot-password/admin-forgot-password.component';
import { AdminResetPasswordComponent } from './admin-reset-password/admin-reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

const passwordRoutes: Routes = [
  {
    path: 'admin-forgot',
    component: AdminForgotPasswordComponent
  },
  {
    path: 'admin-reset/:token',
    component: AdminResetPasswordComponent
  },
  {
    path: '',
    redirectTo: 'admin-forgot',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [AdminForgotPasswordComponent, AdminResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(passwordRoutes)
  ]
})
export class AdminPasswordModule { }
