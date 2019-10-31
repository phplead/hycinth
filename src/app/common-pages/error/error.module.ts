import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const errorRoutes: Routes = [
  {
    path: '',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(errorRoutes)
  ]
})
export class ErrorModule { }
