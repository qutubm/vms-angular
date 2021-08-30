import { Component, OnInit } from '@angular/core';
import { AppUser } from '../shared/models/appUser';
import { AppUserAuth } from '../shared/models/appUserAuth';
import { SecurityService } from '../shared/security.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    }
  
    login() {
      this.securityService.login(this.user)
        .subscribe(resp => {
        this.securityObject = resp;
          if (this.returnUrl) {
            this.router.navigateByUrl(this.returnUrl);
          }
          else{
            this.router.navigate(['.']);
          }
        },
        () => {
          this.securityObject = new AppUserAuth();
        });
    }

}


