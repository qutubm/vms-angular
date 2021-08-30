import { Component, OnInit } from '@angular/core';
import { AppUserAuth } from '../shared/models/appUserAuth';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService){
    this.securityObject = securityService.securityObject;
  }

  logout(): void{
    this.securityService.logout();
  }

  ngOnInit(): void {
  }
  public isMenuCollapsed = true;
  
}
