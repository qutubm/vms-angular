import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppUserAuth } from '../shared/models/appUserAuth';
import { SecurityService } from '../shared/security.service';
import { Profile, ProfilesModel } from './profiles.model';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  securityObject: AppUserAuth = null;

  constructor(private profilesServices: ProfilesService,
    public modalService: NgbModal,
    private securityService: SecurityService,
    private ngxSpinner: NgxSpinnerService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit(): void {
    this.loadAllProfiles();
  }

  loadAllProfiles() {
    this.ngxSpinner.show();

    this.profilesServices.getProfiles().subscribe(
      (profilesModel: ProfilesModel) => {
        this.profiles = profilesModel.Profiles;
        console.log(this.profiles);
      },
      (err: any) => { console.log(err); this.ngxSpinner.hide(); },
      () => this.ngxSpinner.hide(),
    );
  }


  // deleteProfileById(id) {
  //   if (window.confirm('Are you sure, you want to delete?')){
  //     this.profilesServices.deleteProfileByID(id).subscribe(() => {
  //       this.loadAllProfiles();
  //     })
  //   }
  // }


}
