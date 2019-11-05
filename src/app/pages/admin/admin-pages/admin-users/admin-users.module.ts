import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersComponent } from './admin-users.component';
import { SharedModule } from './../../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const adminUsersRoutes: Routes = [
  {
    path: '',
    component: AdminUsersComponent
  }
]

@NgModule({
  declarations: [AdminUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminUsersRoutes)
  ]
})
export class AdminUsersModule { }
