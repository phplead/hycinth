import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
  },
  {
    path: 'error',
    loadChildren: './pages/error/error.module#ErrorModule'
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
