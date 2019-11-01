import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
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
