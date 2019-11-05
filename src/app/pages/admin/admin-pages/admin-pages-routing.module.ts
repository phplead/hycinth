import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component: AdminComponent,
    // children: [
      // {
      //   path: 'admin-login',
      //   loadChildren: './admin-pages/admin-login/admin-login.module#AdminLoginModule'
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: './admin-pages/dashboard/dashboard.module#DashboardModule'
      // },
      // {
      //   path: 'admin-users',
      //   loadChildren: './admin-pages/admin-users/admin-users.module#AdminUsersModule'
      // },
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // }
    // ]

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AdminPagesRoutingModule { }
