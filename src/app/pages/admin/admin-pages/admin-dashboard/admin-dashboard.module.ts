import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './admin-dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminDashboardRoutes)
  ]
})
export class AdminDashboardModule { }
