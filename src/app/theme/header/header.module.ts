import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SharedModule } from './../../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { ToolboxModule } from '../toolbox/toolbox.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    ToolboxModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
