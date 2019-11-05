import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../../../../models';

@Injectable({providedIn: 'root'})

export class AdminUsersService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<User> {
    return this.http.get<User>('get/users');
  }

}
