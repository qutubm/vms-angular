import { Component } from '@angular/core';
import { AppUserAuth } from './shared/models/appUserAuth';
import { SecurityService } from './shared/security.service';

@Component({
  selector: 'vms-app',
  template: `
            <nav-bar></nav-bar>
            <div class='container-fluid'>
            <router-outlet></router-outlet>
            </div>
            
            `,
            
  styleUrls: ['./vms-app.component.css']
})
export class VmsAppComponent {
  title = 'vms-angular';
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService){
    this.securityObject = securityService.securityObject;
  }

  logout(): void{
    this.securityService.logout();
  }

}
