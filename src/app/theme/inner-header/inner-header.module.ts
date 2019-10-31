import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerHeaderComponent } from './inner-header.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [InnerHeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [InnerHeaderComponent]
})
export class InnerHeaderModule { }
