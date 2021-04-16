import { Component } from '@angular/core';

@Component({
  selector: 'vms-app',
  template: `
            <nav-bar></nav-bar>
            <div class='container'>
              <router-outlet></router-outlet>
            </div>
            `,
  
            // <app-profile-list></app-profile-list>  
  styleUrls: ['./vms-app.component.css']
})
export class VmsAppComponent {
  title = 'vms-angular';
}
