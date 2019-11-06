import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models';
import { AdminAuthenticationService } from '../../admin-authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage = '';
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AdminAuthenticationService) {
      if (this.authenticationService.currentUserValue && this.authenticationService.currentUserValue.role === Role.Admin) {
        this.router.navigate(['/admin']);
      }
    }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

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
                user => {
                  console.log('user ', user)
                  if(user.token && user.role === Role.Admin) {
                    this.router.navigate([this.returnUrl || user.role.toLowerCase()]);
                  }
                },
                error => {
                    // this.error(error);
                    this.errorMessage = error;
                    this.loading = false;
                });
    }

}
