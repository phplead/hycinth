import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [AdminHeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ AdminHeaderComponent ]
})
export class AdminHeaderModule { }
