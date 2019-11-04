import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [AdminSidebarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AdminSidebarComponent]
})
export class AdminSidebarModule { }
