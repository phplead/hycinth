import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Role } from '../../models';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AdminAuthenticationService {
    
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, 
        @Inject(PLATFORM_ID) private platformId: Object) {
        if(isPlatformBrowser(this.platformId)) {
            this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('envisiunUser')));
            this.currentUser = this.currentUserSubject.asObservable();
        }        
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>('users/authenticate', { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token && user.role === Role.Admin) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    if(isPlatformBrowser(this.platformId)) {
                        localStorage.setItem('envisiunUser', JSON.stringify(user));
                    }
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }
    
    forgot_password(email) {
        return this.http.post<any>(`users/forgot_password`, email)
    }

    regenerateEmailVerifyLink(email) {
        return this.http.post<any>(`users/regenerateEmailVerifyLink`, email);
    }

    resetPassword(data) {
        return this.http.post<any>(`users/reset_password`, data);
    }

    logout() {
        if(isPlatformBrowser(this.platformId)) {
            // remove user from local storage to log user out
            localStorage.removeItem('envisiunUser');
        }
        this.currentUserSubject.next(null);
    }
}