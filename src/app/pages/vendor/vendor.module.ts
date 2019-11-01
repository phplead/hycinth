import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HeaderModule } from '../../theme/header/header.module';
import { FooterModule } from '../../theme/footer/footer.module';

@NgModule({
  declarations: [VendorComponent],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
