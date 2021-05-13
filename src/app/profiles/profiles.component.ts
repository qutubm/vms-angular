import { Component, OnInit } from '@angular/core';
import { ProfilesModel } from '../shared/models/profiles.model';
import { ProfilesService } from '../shared/service/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})

export class ProfilesComponent implements OnInit {

  ProfilesModel: ProfilesModel[] = [];

  constructor(private profilesServices: ProfilesService) { 

    
  }

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
}
