import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
