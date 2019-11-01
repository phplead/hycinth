import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { UserGuard, VendorGuard } from '../guards';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [ UserGuard ]
      },
      {
        path: 'vendor',
        loadChildren: './vendor/vendor.module#VendorModule',
        canActivate: [ VendorGuard ]
      },
      {
        path: 'user-register',
        loadChildren: './user/user-pages/user-register/user-register.module#UserRegisterModule'
      },
      {
        path: 'vendor-register',
        loadChildren: './vendor/vendor-pages/vender-register/vendor-register.module#VendorRegisterModule'
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'password',
        loadChildren: './password/password.module#PasswordModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
