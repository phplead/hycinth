import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPagesComponent } from './admin-pages.component';
import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { AdminHeaderModule } from '../theme/admin-header/admin-header.module';
import { AdminSidebarModule } from '../theme/admin-sidebar/admin-sidebar.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AdminPagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminHeaderModule,
    AdminSidebarModule,
    AdminPagesRoutingModule
  ]
})
export class AdminPagesModule { }
