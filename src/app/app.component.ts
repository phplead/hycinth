import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AddContentService } from './services/add-content.service';
declare  var $: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent implements AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute, public addContent: AddContentService) {
    
    if(window.location.pathname.startsWith('/admin')) {
      this.addContent.addCss('./assets/css/sb-admin-2.min.css');
    } else {
      this.addContent.addCss('./assets/css/styles.css');
      this.addContent.addCss('./assets/css/responsive.css');
    }


    $('#loader').css('display', 'none');

    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationEnd) {
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
