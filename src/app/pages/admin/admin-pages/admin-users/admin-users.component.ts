import { Component, OnInit } from '@angular/core';
import { User } from './../../../../models';
import { AdminUsersService } from './admin-users.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  selectPage: number = 1;
  users: User[] = [];

  constructor(private adminUserSer: AdminUsersService) {
    this.adminUserSer.getusers()
    .subscribe(data => {
      console.log('data ', data);
    });
  }

  ngOnInit() {  }

  pageChanged(page: number) {
    console.log('page ', page);
    this.selectPage = page;
  }

}
