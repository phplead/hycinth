import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare  var $: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationEnd) {
        $('#loader').css('display', 'none');

        // remove class
        $("#main-navigation").removeClass("active");
        $(".menu-toggle").removeClass("active");
        $("body").removeClass("body-fixed");
        $(".toolbox").removeClass("active");
        $("#tool-nav").removeClass("active");
        $('#tool-nav ul li').removeClass('cst-animate');

        window.scrollTo(0, 0);
      }
    });

    this.router.errorHandler = (error: any) => {
      console.log('err handler ', error);
      this.router.navigate(['/error']); // or redirect to default route
    }
  }

  ngAfterViewInit() { }
  
}
