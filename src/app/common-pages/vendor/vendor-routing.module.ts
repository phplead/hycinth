import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';

const vendorRoutes: Routes = [
  {
    path: '',
    component: VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(vendorRoutes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
