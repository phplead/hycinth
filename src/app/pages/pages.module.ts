import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../theme/header/header.module';
import { FooterModule } from '../theme/footer/footer.module';
import { InnerHeaderModule } from '../theme/inner-header/inner-header.module';

@NgModule({
  declarations: [ PagesComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    InnerHeaderModule,
    FooterModule,
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
