import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminAuthenticationService } from '../../../admin-authentication.service';
import { MustMatch } from '../../../../../helpers';

@Component({
  selector: 'app-admin-reset-password',
  templateUrl: './admin-reset-password.component.html',
  styleUrls: ['./admin-reset-password.component.scss']
})
export class AdminResetPasswordComponent implements OnInit {

  resetPassForm: FormGroup;
  loading = false;
  submitted = false;
//   error = '';
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private authenticationService: AdminAuthenticationService
  ) { 
    this.resetPassForm = this.formBuilder.group({
      password_token: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
  },{
      validators: MustMatch('password', 'confirm_password')
  });
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        const token = this.route.snapshot.params['token'];
        if(token) {
          this.resetPassForm.patchValue({
            password_token: token
          })
        }
  }

  ngOnInit() { }

  // convenience getter for easy access to form fields
  get f() { return this.resetPassForm.controls; }

  onSubmit() {    
      this.submitted = true;

      // stop here if form is invalid
      if (this.resetPassForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.resetPassword(this.resetPassForm.value)
          .pipe(first())
          .subscribe(
              data => this.router.navigate(['/login']),
              // data => this.router.navigate(['/login'], { state: { message: data.message } }),
              error => {
                this.loading = false;
              } 
            );
  }

}