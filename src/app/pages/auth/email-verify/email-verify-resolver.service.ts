import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class EmailVerifyResolver implements Resolve<any>{
    constructor(private auth: AuthenticationService, private http: HttpClient){ }

    resolve(route: ActivatedRouteSnapshot) {
        return this.auth.EmailVerify(route.params['token']).pipe(
            map(m => m)
            ,catchError(e => e)
        )
    } 

}