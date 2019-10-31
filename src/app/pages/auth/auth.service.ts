import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  EmailVerify(token) {
    return this.http.get(`users/verifyEmail/${token}`);
  }

}
