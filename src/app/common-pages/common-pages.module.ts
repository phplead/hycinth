//leaves.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './common-pages-routing.module';
import { ApplyComponent } from './apply/apply.component';
import { Page404leavesComponent } from './page404leaves/page404leaves.component';
import { CommonPagesComponent } from './common-pages.component';

@NgModule({
  declarations: [
    CommonPagesComponent,
    ApplyComponent,
    Page404leavesComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
  ]
})
export class CommonPagesModule { }
