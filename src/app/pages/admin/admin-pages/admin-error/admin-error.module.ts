import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminErrorComponent } from './admin-error.component';
import { SharedModule } from './../../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const adminUsersRoutes: Routes = [
  {
    path: '',
    component: AdminErrorComponent
  }
]

@NgModule({
  declarations: [AdminErrorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminUsersRoutes)
  ]
})
export class AdminErrorModule { }
