import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../auth/authentication.service';
import { MustMatch } from 'src/app/helpers';
import { AlertService } from '../../../alert/alert.service';

declare var $: any;

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.scss']
})
export class VendorRegisterComponent implements OnInit, AfterViewInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
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
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
        email: ['', [Validators.required, Validators.pattern(this.emailRegEx)]],
        role: ['Vendor'],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        confirm_password: ['', Validators.required]
      },{
          validators: MustMatch('password', 'confirm_password')
      });
  }

  ngAfterViewInit(): void {
    $('.video').parent().click(function () {
        if($(this).children(".video").get(0).paused){
            $(this).children(".video").get(0).play();
            $(this).children(".playButton").fadeOut();
        }else{
            $(this).children(".video").get(0).pause();
            $(this).children(".playButton").fadeIn();
        }
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

 // testimonial slider
 carouselTestimonials = {
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
}

}
