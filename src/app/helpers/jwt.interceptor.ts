import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../pages/auth/authentication.service';
import { User } from '../models';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthenticationService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser: any = this.auth.currentUser;
        let api = environment.apiUrl;  
        
        let query = '';
        if(request.url.startsWith('/assets/i18n')) {
            query = request.url;
        } else {
            query = api + request.url;
        }

        request = request.clone({
            url: query
        });

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}

export const JwtHelper = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
};
