import { Component } from '@angular/core';

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
}
