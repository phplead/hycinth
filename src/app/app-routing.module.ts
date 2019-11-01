import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AdminGuard } from './guards';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [ AdminGuard ]
  },
  {
    path: 'error',
    // loadChildren: async () => {
    //   const { ErrorModule } = await import('./pages/error/error.module');
    //   return ErrorModule
    // } 
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
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
