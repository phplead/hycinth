import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [ OwlModule, RouterModule, ReactiveFormsModule, HttpClientModule,
    TranslateModule, NgxPaginationModule ]
})
export class SharedModule { }
