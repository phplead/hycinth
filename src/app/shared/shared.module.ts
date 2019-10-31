import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ OwlModule, RouterModule, ReactiveFormsModule, HttpClientModule ]
})
export class SharedModule { }
