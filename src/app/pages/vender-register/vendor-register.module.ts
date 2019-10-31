import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { AlertModule } from '../alert/alert.module';
import { VendorRegisterComponent } from './vendor-register.component';

const vendorRegRoutes: Routes = [
  {
    path: '', component: VendorRegisterComponent
  }
]

@NgModule({
  declarations: [VendorRegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    RouterModule.forChild(vendorRegRoutes)
  ]
})
export class VendorRegisterModule { }
