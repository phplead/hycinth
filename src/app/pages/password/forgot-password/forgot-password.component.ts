import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService
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