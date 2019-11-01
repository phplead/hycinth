import { Component } from '@angular/core';
import { AuthenticationService } from './../../pages/auth/authentication.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { 

  constructor(public auth: AuthenticationService) { }

  close_nav() {
    $("#main-navigation").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $("body").removeClass("body-fixed");
  }

}
