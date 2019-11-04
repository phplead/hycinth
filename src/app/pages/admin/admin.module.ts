import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminHeaderModule } from './theme/admin-header/admin-header.module';
import { AdminSidebarModule } from './theme/admin-sidebar/admin-sidebar.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminHeaderModule,
    AdminSidebarModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
