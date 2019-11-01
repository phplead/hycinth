import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
import { AuthenticationService } from '../../pages/auth/authentication.service';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.scss']
})
export class InnerHeaderComponent implements OnInit, AfterViewInit {
  
  constructor(public auth: AuthenticationService) {   }

  ngOnInit() {  }

  ngAfterViewInit(): void {
    //navigation js
    $(".menu-toggle").click(function() {
      $(this).addClass("active");
      $("#main-navigation").addClass("active");
      $("body").addClass("body-fixed");
    });

    //Toolbox animation
    $(".toolbox").click(function() {
        $('#tool-nav ul li').addClass('cst-animate');
        $("body").addClass("body-fixed");
    });

    $(".toolbox").click(function () {
        $(this).addClass("active");
        $("#tool-nav").addClass("active");
    });
    
    $(".nav-close-btn").click(function () {
        $("#tool-nav").removeClass("active");
        $(".toolbox").removeClass("active");
    });
    //End Toolbox animation
  }

}
