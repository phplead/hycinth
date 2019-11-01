import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
 

  constructor() { }

  ngOnInit() { 
    AOS.init();
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

}
