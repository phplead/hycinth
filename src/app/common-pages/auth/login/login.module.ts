import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AlertModule } from '../../alert/alert.module';
import { HeaderModule } from '../../../theme/header/header.module';
import { FooterModule } from '../../../theme/footer/footer.module';

const loginRoutes: Routes = [
  {
    path: '', component: LoginComponent
  }
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(loginRoutes)
  ],
  // exports: [ LoginComponent ]
})
export class LoginModule { }
