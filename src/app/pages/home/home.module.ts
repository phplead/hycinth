import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule,
    RouterModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
