//leaves.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPagesRoutingModule } from './common-pages-routing.module';
import { CommonPagesComponent } from './common-pages.component';
import { HeaderModule } from '../theme/header/header.module';
import { FooterModule } from '../theme/footer/footer.module';
import { InnerHeaderModule } from '../theme/inner-header/inner-header.module';

@NgModule({
  declarations: [
    CommonPagesComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    InnerHeaderModule,
    FooterModule,
    CommonPagesRoutingModule,
  ]
})
export class CommonPagesModule { }
