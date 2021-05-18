import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ProfilesDetailComponent } from './profiles-detail/profiles-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfilesModel } from '../shared/models/profiles.model';
import { ProfilesService } from '../shared/service/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {

  ProfilesModel: ProfilesModel[] = [];

  constructor(private profilesServices: ProfilesService, public modalService: NgbModal) {   }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles() {
    this.profilesServices.getProfiles().subscribe(
      (profiles_data: ProfilesModel[]) => {
        this.ProfilesModel = profiles_data
      },
      (err: any) => console.log(err),
      () => console.log(this.ProfilesModel),
    );
  }

  //Modal Experiment
  openVideoPopup(link) {
    const modalRef = this.modalService.open(ProfilesDetailComponent);
    modalRef.componentInstance.src = link;
  }

  
}
