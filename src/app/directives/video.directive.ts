import { Directive, OnInit } from '@angular/core';
declare var $: any;

@Directive({ selector: '[appVideo]' })

export class VideoDirective implements OnInit{
  
  constructor() { }

  ngOnInit(): void {
    $('.video').parent().click(function () {
      if($(this).children(".video").get(0).paused) {
          $(this).children(".video").get(0).play();
          $(this).children(".playButton").fadeOut();
      } else {
          $(this).children(".video").get(0).pause();
          $(this).children(".playButton").fadeIn();
      }
    });
  }


}
