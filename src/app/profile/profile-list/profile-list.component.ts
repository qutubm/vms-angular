import { Component, OnInit } from '@angular/core';
import { Profile, ProfileModel } from '../profile.model';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {

  profiles : Profile[];
  

  constructor(private profileService : ProfileService) { }

  ngOnInit(): void {

    this.profileService.getProfiles().subscribe((data:ProfileModel) => {
        if(data.Success)
        {
            console.log(data.Profiles);
            this.profiles = data.Profiles;
        }
    });
    
  }

}
