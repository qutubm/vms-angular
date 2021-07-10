import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';
import { Profile, ProfilesExtra } from '../profiles.model';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles-edit',
  templateUrl: './profiles-edit.component.html',
  styleUrls: ['./profiles-edit.component.css']
})
export class ProfilesEditComponent implements OnInit {
  profileEditForm: FormGroup;
  profilesID = this.activatedRoute.snapshot.params['id'];
  ProfilesData: Profile[] = [];

  
  _profileID: string;
  _profileEmail: string;
  _profileType: string;
  _profileFirstName: string;
  _profileLastName: string;
  _profilePhone: string;
  _profilePostcode: string;
  _profileAdditionalEmail: string;
  _profileAdditionalPhone: string;
  _profileDeleted: string;

  constructor(private formBuilder: FormBuilder, private profilesServices: ProfilesService, private activatedRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {
    this.loadAllProfiles();
    console.log(this.ProfilesData[0]);
    this.profileEditForm = this.formBuilder.group({
      Id: [{ value: this.profilesID, disabled: false }, []],
      Email: [{ value: this.profilesID, disabled: false }, [Validators.required, Validators.minLength(8)]],
      //password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      //passwordConfirmed: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      Type: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      FirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      Phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      Suburb: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      State: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      Postcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      AdditionalEmail: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      AdditionalPhone: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      Deleted: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    });

  }

  loadAllProfiles() {
    this.profilesServices.getProfiles().subscribe(
      (profiles: ProfilesExtra) => {
        this.ProfilesData = profiles.Profiles;
        let profileDataIndex = this.ProfilesData.findIndex(x => x.Id === this.profilesID);
        
        this._profileID = this.ProfilesData[profileDataIndex].Id;
        this._profileEmail = this.ProfilesData[profileDataIndex].Id;
        this._profileType = this.ProfilesData[profileDataIndex].Id;
        this._profileFirstName = this.ProfilesData[profileDataIndex].Id;
        this._profileLastName = this.ProfilesData[profileDataIndex].Id;
        this._profileID = this.ProfilesData[profileDataIndex].Id;
        this._profileID = this.ProfilesData[profileDataIndex].Id;
        this._profileID = this.ProfilesData[profileDataIndex].Id;
        this._profileID = this.ProfilesData[profileDataIndex].Id;

      },
      (err: any) => console.log(err),
      () => console.log(this.ProfilesData),
    );
  }



  editProfile(profileForm: FormGroup) {
    if (profileForm.valid) {
      // this.isProfileValid = true;
      // this.profileServices.createProfile(this.profileForm.value).subscribe((data: {}) => {
      //   this.router.navigate(['/profiles'], { relativeTo: this.activatedRoute });
      // })
      //console.log(this.profileForm.value);
    } else {
      //this.isProfileValid = false;
      console.log("Invalid Form!");
    }
  }

}
