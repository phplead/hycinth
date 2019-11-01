import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Component({ 
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentInit {
    
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMessage = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        // private auth: AuthService,
        // private alertService: AlertService
    ) {
        // const state = router.getCurrentNavigation().extras.state;
        // if(state) {
        //     setTimeout(() => {
        //         this.success(state.message);
        //     }, 1000)
        // }        

        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        // const token = this.route.snapshot.queryParams['token'];
        // if(token) {
        //     this.auth.EmailVerify(token)
        //     .subscribe(
        //     data => {
        //         this.router.navigate(['/login']);
        //         console.log('data ', data)
        //     },
        //     err => {
        //         this.router.navigate(['/login']);

        //         console.log('err ', err)
        //     }
        //     )
        // }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    }

    ngAfterContentInit(): void {
       
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => this.router.navigate([this.returnUrl || data.role.toLowerCase()]),
                error => {
                    // this.error(error);
                    this.errorMessage = error;
                    this.loading = false;
                });
    }

    // success(message: string) {
    //     this.alertService.success(message);
    // }

    // error(message: string) {
    //     this.alertService.error(message);
    // }

    resendMail(){ 
        this.loading = true;
        this.authenticationService.regenerateEmailVerifyLink(this.loginForm.value)
        .subscribe(
            data=> {
                console.log('data ', data);
                this.loading = false;
            },
            err => {
                console.log('err ', err);
                this.loading = false;
            }
        )
        console.log('in');
    }
}