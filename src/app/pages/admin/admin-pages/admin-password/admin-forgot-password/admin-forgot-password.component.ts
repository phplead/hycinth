import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminAuthenticationService } from '../../../admin-authentication.service';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './admin-forgot-password.component.html',
  styleUrls: ['./admin-forgot-password.component.scss']
})
export class AdminForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AdminAuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
  }

  ngOnInit() {
      this.forgotPassForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.forgotPassForm.controls; }

  onSubmit() {    
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotPassForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.forgot_password(this.forgotPassForm.value)
          .pipe(first())
          .subscribe(
              data => this.loading = false,
              error => this.loading = false
            );
  }
}