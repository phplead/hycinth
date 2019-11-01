import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerHeaderComponent } from './inner-header.component';
import { SharedModule } from './../../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { ToolboxModule } from '../toolbox/toolbox.module';

@NgModule({
  declarations: [InnerHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    ToolboxModule
  ],
  exports: [InnerHeaderComponent]
})
export class InnerHeaderModule { }
