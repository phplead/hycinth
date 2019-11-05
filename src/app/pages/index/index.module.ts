import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';

const indexRoutes: Routes = [
  {
    path: '', component: IndexComponent
  }
]

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(indexRoutes)
  ]
})
export class IndexModule { }
