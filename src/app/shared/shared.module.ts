import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AlertModule } from '../pages/alert/alert.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule,
    OwlModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [ OwlModule, RouterModule, ReactiveFormsModule, HttpClientModule,
    TranslateModule, NgxPaginationModule, AlertModule ]
})
export class SharedModule { }
