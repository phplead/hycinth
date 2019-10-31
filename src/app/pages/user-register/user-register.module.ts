import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { AlertModule } from '../alert/alert.module';
import { HeaderModule } from './../../theme/header/header.module';
import { FooterModule } from './../../theme/footer/footer.module';

const userRegRoutes: Routes = [
  {
    path: '', component: UserRegisterComponent
  }
]

@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(userRegRoutes)
  ]
})
export class UserRegisterModule { }
