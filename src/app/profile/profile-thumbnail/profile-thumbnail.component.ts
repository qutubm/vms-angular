import { Component, Input, OnInit } from '@angular/core';
import { Profile, ProfileModel } from "../profile.model";

@Component({
  selector: 'app-profile-thumbnail',
  templateUrl: './profile-thumbnail.component.html',
  styleUrls: ['./profile-thumbnail.component.css']
})
export class ProfileThumbnailComponent implements OnInit {

  @Input() profileInput : Profile;

  constructor() { }

  ngOnInit(): void {
    }


}
