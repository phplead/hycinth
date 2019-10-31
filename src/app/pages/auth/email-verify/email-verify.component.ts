import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../alert/alert.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {
  emailVerify: any = ''
  message: string = '';
  errorM: string = '';
  constructor(private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router) {
      const token = this.route.snapshot.params['token'];
        if(token) {
            this.auth.EmailVerify(token)
            .subscribe(
            (data: any) => {
              this.message = data.message;
              this.errorM = '';
              console.log('data ', data)
            },
            err => {
              this.errorM = err;
              this.message = '';
            }
            )
        }
    }

  ngOnInit() {
    // this.emailVerify = this.route.snapshot.data['email_verify'];
    // console.log('emailv ', this.emailVerify);
  }

}
