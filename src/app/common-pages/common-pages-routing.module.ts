//leaves-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonPagesComponent } from './common-pages.component';
import { UserGuard, VendorGuard } from '../guards';


const routes: Routes = [
  {
    path: '', component: CommonPagesComponent, children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./auth/login/login.module').then(m=>m.LoginModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [ UserGuard ]
      },
      {
        path: 'vendor',
        loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
        canActivate: [ VendorGuard ]
      },
      {
        path: 'user-register',
        loadChildren: () => import('./auth/user-register/user-register.module').then(m => m.UserRegisterModule)
      },
      {
        path: 'vendor-register',
        loadChildren: () => import('./auth/vender-register/vendor-register.module').then(m => m.VendorRegisterModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'password',
        loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
      },

      // { path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule) },
      // {
      //   path: '', redirectTo: 'login', pathMatch: 'full'
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPagesRoutingModule { }
