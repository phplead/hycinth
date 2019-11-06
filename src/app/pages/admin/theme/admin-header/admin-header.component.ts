import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationService } from '../../admin-authentication.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(public auth: AdminAuthenticationService,
    private router: Router) { }

  ngOnInit() {  }

  logout() {
    // this.auth.logout();
    // this.router.navigate(['/admin/admin-login']);
    // $('').model()
  }

}
