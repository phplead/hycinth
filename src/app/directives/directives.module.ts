import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDirective } from './video.directive';



@NgModule({
  declarations: [VideoDirective],
  imports: [
    CommonModule
  ],
  exports: [ VideoDirective ]
})
export class DirectivesModule { }
