import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { EmailVerifyResolver } from './email-verify/email-verify-resolver.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { AlertModule } from '../alert/alert.module';
import { HeaderModule } from './../../theme/header/header.module';
import { FooterModule } from './../../theme/footer/footer.module';

const authRoutes: Routes = [
  {
    path: 'email-verify/:token',
    component: EmailVerifyComponent,
    // resolve: { email_verify : EmailVerifyResolver }
  },
  {
    path: '',
    redirectTo: 'email-verify',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [EmailVerifyComponent, UserLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [ EmailVerifyResolver ]
})
export class AuthModule { }
