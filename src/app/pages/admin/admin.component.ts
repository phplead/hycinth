import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-admin',
  // templateUrl: './admin.component.html',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {  }

}
