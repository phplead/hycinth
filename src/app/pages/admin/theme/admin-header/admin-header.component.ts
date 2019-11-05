import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../../pages/auth/authentication.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {  }

}
