import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserAuth } from './shared/models/appUserAuth';
import { SecurityService } from './shared/security.service';

@Component({
  selector: 'vms-app',
  template: `
            <nav-bar></nav-bar>
            <div class='container-fluid'>
            <router-outlet></router-outlet>
            </div>
            <ngx-spinner [bdColor]="'rgba(0, 0, 0, 0.8)'" [color]="'#fff'" [fullScreen]=true [size]="'medium'" [type]="'ball-atom'"></ngx-spinner>  
            `,

  styleUrls: ['./vms-app.component.css']
})
export class VmsAppComponent implements OnInit {
  title = 'vms-angular';
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService, private router: Router) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit(): void {
    if (!this.securityService.securityObject.isAuthenticated) {
      this.router.navigate(['login']);
    }
  }

  logout(): void {
    this.securityService.logout();
  }

}
