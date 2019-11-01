import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AlertModule } from '../alert/alert.module';
import { HeaderModule } from '../../theme/header/header.module';
import { FooterModule } from '../../theme/footer/footer.module';

const passwordRoutes: Routes = [
  {
    path: '',
    redirectTo: 'forgot',
    pathMatch: 'full'
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset/:token',
    component: ResetPasswordComponent
  }  
]

@NgModule({
  declarations: [ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(passwordRoutes)
  ]
})
export class PasswordModule { }
