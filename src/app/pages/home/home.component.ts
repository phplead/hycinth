import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  showEventsOne: boolean = false;

  constructor() { }

  ngOnInit() {
    // AOS.init();
  }

  images = [];

  carouselOptions = {
    loop:true,
  margin:0,
  responsiveClass:true,
      autoplay: false,
      nav: true,
      dots:false, 
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      991:{
          items:5,
      }
  }
  }

  carouselOptionsEvents = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    nav: true,
    dots: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        991: {
            items: 4,
        }
    }
  }

  carouselOptionsBudget = {
    loop:true,
    margin:0,
    responsiveClass:true,
        autoplay: false,
        nav: true,
        dots:false,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        991:{
            items:3,
        }
    }
  }
  // testimonial slider
  carouselTestimonials = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
  }

  carouselBannerOptions = {
    loop: true,
    animateOut: 'fadeOut',
    margin: 10,
    autoplayTimeout: 5000,
    nav: false,
    dots:false,
    autoplay: true,
    items: 1
  }

  ngAfterViewInit(): void {
    AOS.refresh();

    setTimeout(() =>{
      this.showEventsOne = true;
    },1500)

    $( ".form-tab-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".form-tab-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');

    $( ".form-tab-slider .owl-prev").html('<i class="fas fa-chevron-left"></i>');
    $( ".form-tab-slider .owl-next").html('<i class="fas fa-chevron-right"></i>');
    
    $(document).ready(function(){
      //tabbing js
      $('.tab-item a').click(function(){
          $('.tab-item a').removeClass('activelink');
          $(this).addClass('activelink');
          var tagid = $(this).data('tag');
          $('.tab-data').removeClass('active').addClass('hide');
          $('#'+tagid).addClass('active').removeClass('hide');
      });

      //packages tabbing
      $('.package-item a').click(function(){
          $('.package-item a').removeClass('activelink');
          $(this).addClass('activelink');
          var pkgid = $(this).data('tag');
          $('.tab-data').removeClass('active').addClass('hide');
          $('#'+pkgid).addClass('active').removeClass('hide');
      });
    });
    //how its work video
    $('.video').parent().click(function () {
      if($(this).children(".video").get(0).paused){
          $(this).children(".video").get(0).play();
          $(this).children(".playButton").fadeOut();
      }else{
          $(this).children(".video").get(0).pause();
          $(this).children(".playButton").fadeIn();
      }
    });
    // -------------------------
    // main banner video js
    //Banner-video
    let video = $('#video-container video');

    const setVideoDimensions = () => {
      if (window.innerWidth / window.innerHeight > 16 / 9) {
        video.css.width = '100vw';
        video.css.height = 'calc(100vw * 9 / 16)';
      } else {
        video.css.width = 'calc(100vh * 16 / 9)';
        video.css.height = '100vh';
      }
    };

    window.onresize = setVideoDimensions;
    setVideoDimensions();
  }

}
