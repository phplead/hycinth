import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from './../../services/authentication.service';
import { MustMatch } from 'src/app/helpers';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.scss']
})
export class VendorRegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
//   error = '';
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private alertService: AlertService,
      private authenticationService: AuthenticationService
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          role: ['Vendor'],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirm_password: ['', Validators.required]
      },{
          validators: MustMatch('password', 'confirm_password')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {    
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              (data: any) =>  {
                  this.router.navigate(['/login']);
                  // this.router.navigate(['/login'], { state: { message: data.message } });
                },
              error => {
                //   this.error = error;
                // this.error(error);
                  this.loading = false;
              });
  }

//   success(message: string) { 
//     this.alertService.success(message);
// }

// error(message: string) {
//     this.alertService.error(message);
// }
}
