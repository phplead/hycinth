import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './admin-pages.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPagesComponent,
    children: [
      {
        path: '',
        loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule'
      },
      {
        path: 'admin-users',
        loadChildren: './admin-users/admin-users.module#AdminUsersModule'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
