import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent { 

  constructor() { }

  close_nav() {
    $('#tool-nav ul li').removeClass('cst-animate');
    $("body").removeClass("body-fixed");
  }

}
