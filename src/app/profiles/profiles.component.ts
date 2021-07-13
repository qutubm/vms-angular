import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile, ProfilesModel } from './profiles.model';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {

  profiles: Profile[] = []; 

  constructor(private profilesServices: ProfilesService, public modalService: NgbModal) {   }

  ngOnInit(): void {
    this.loadAllProfiles();
  }

  loadAllProfiles() {
    this.profilesServices.getProfiles().subscribe(
      (profilesModel: ProfilesModel) => {
        this.profiles = profilesModel.Profiles;
        console.log(this.profiles);
      },
      (err: any) => console.log(err),
      // () => console.log(this.profiles),
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
