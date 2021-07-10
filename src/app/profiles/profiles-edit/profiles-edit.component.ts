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

  constructor(private formBuilder: FormBuilder, private profilesServices: ProfilesService, private activatedRoute: ActivatedRoute, private router: Router) { }
  profileForm: FormGroup;
  ProfilesView: Profile[] = [];
  testvalue: any = 'the mandatory notes';

  profilesData = Profile

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(50)]],
      //password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      //passwordConfirmed: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      type: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      suburb: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      postcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      additionalEmail: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      additionalPhone: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      deleted: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    });
  }

  loadAllProfiles() {
    this.profilesServices.getProfiles().subscribe(
      (profiles_data: ProfilesExtra) => {
        this.ProfilesView = profiles_data.Profiles;
        //console.log("1st Profile : " + this.ProfilesModel[0]);
      },
      (err: any) => console.log(err),
      () => console.log(this.ProfilesView),
    );
  }



  editProfile(profileForm: FormGroup) {
    if (profileForm.valid) {
      // this.isProfileValid = true;
      // this.profileServices.createProfile(this.profileForm.value).subscribe((data: {}) => {
      //   this.router.navigate(['/profiles'], { relativeTo: this.activatedRoute });
      // })
      console.log(this.profileForm.value);
    } else {
      //this.isProfileValid = false;
      console.log("Invalid Form!");
    }
  }

}
