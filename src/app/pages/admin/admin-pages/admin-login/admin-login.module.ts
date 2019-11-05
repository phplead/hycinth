import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../../../shared/shared.module';

const adminLoginRoutes: Routes = [
  {
    path: '',
    component: AdminLoginComponent
  }
]

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminLoginRoutes)
  ]
})
export class AdminLoginModule { }
