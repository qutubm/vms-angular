import { Component, OnInit } from '@angular/core';
import { AppUser } from '../shared/models/appUser';
import { AppUserAuth } from '../shared/models/appUserAuth';
import { SecurityService } from '../shared/security.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;

  faEnvelope = faEnvelope;
  faLock = faLock;

  isLoggingIn = false;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxSpinner: NgxSpinnerService) { }


  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  login() {
    this.isLoggingIn = true;
    this.ngxSpinner.show();

    this.securityService.login(this.user)
      .subscribe(resp => {
        this.isLoggingIn = false;
        this.securityObject = resp;
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
        else {
          this.router.navigate(['.']);
        }
      },
        () => {
          this.securityObject = new AppUserAuth();
          this.isLoggingIn = false;
          this.ngxSpinner.hide();
        },
        () => this.ngxSpinner.hide());
  }

}


