import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-admin',
  template: `<router-outlet></router-outlet>`
})
export class AdminComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {  }

}
