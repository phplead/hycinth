import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddContentService {

  constructor() {  }

  addCss(href) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.media = 'all';
    head.appendChild(link);
    }

}
