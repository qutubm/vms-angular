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

  ProfilesModel: any[];

  constructor(private profilesServices: ProfilesService, public modalService: NgbModal) {   }

  ngOnInit(): void {
    this.loadAllProfiles();
  }

  loadAllProfiles() {
    this.profilesServices.getProfiles().subscribe(
      (profiles_data: any[]) => {
        this.ProfilesModel = profiles_data
        console.log(this.ProfilesModel);
      },
      (err: any) => console.log(err),
      //() => console.log(this.ProfilesModel),
    );
  }

  processProfiles() {
    
    this.ProfilesModel
  }

  // deleteProfileById(id) {
  //   if (window.confirm('Are you sure, you want to delete?')){
  //     this.profilesServices.deleteProfileByID(id).subscribe(() => {
  //       this.loadAllProfiles();
  //     })
  //   }
  // }

  // //Modal Experiment
  // openVideoPopup(link) {
  //   const modalRef = this.modalService.open(ProfilesDetailComponent);
  //   modalRef.componentInstance.src = link;
  // }

  
}
