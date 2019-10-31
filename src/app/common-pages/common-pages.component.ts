import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-common-pages',
  templateUrl: './common-pages.component.html',
  styleUrls: ['./common-pages.component.scss']
})

export class CommonPagesComponent implements OnInit {
  currentUrl  = '/';
  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationEnd) {
        this.currentUrl = evt.url;
      }
    });
  }

  ngOnInit() {  }

}
