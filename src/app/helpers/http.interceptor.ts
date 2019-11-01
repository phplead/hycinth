
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../pages/alert/alert.service';

@Injectable()
export class HttpProcessInterceptor implements HttpInterceptor {
     constructor(
       private alertService: AlertService,
       private router: Router,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
        .pipe(
            retry(1),
            map((res: any) => {

                if(res.body && res.body.message)
                { 
                    setTimeout(()=>{
                        this.alertService.success(res.body.message);
                    },1000)
                    // this.snotifyService.success(res.body.message); 
                }
                return res;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log('error ', error);
                let errorMessaege = '';
                if(error.error) {
                    console.log('error.error ', error.error);
                    // if(error.error.message == 'Invalid Token') {
                    //     localStorage.removeItem('EnvisiunUser');
                    //     this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
                    //     this.snotifyService.error('Session Expired');
                    // } else 
                    if(error.error.message == '404') {
                        this.router.navigate(['/404']);
                    } else {
                        // setTimeout(()=>{
                            this.alertService.error(error.error.message.message || error.error.message);
                            // this.snotifyService.error(error.error.message.message || error.error.message);
                        // },1000);
                    }
                     errorMessaege = `${error.error.message.message || error.error.message}`;
                    return throwError(errorMessaege);
                }
            })
        )
    }
}

export const HttpHelper = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpProcessInterceptor,
    multi: true
};
