import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { UserGuard, VendorGuard, AdminGuard } from './guards';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  //   pathMatch: 'full'
  // },
  { path: '', loadChildren: () => import(`./common-pages/common-pages.module`).then(m => m.CommonPagesModule) },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  // },
  {
    path: 'user-register',
    loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule)
  },
  {
    path: 'vendor-register',
    loadChildren: () => import('./pages/vender-register/vendor-register.module').then(m => m.VendorRegisterModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then(m => m.PasswordModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    canActivate: [ UserGuard ]
  },
  {
    path: 'vendor',
    loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule),
    canActivate: [ VendorGuard ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [ AdminGuard ]
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

const config: ExtraOptions = {
  useHash: false,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
