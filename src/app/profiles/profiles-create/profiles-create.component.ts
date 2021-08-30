import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../profiles.service';
import { Profile, ProfileModel } from '../profiles.model';
import { SelectListItem } from '../../shared/models/selectListItem';
import { NgSelectConfig } from '@ng-select/ng-select';
import { AppUserAuth } from 'src/app/shared/models/appUserAuth';
import { SecurityService } from 'src/app/shared/security.service';



@Component({
  selector: 'profiles-create',
  templateUrl: './profiles-create.component.html',
  styleUrls: ['./profiles-create.component.css']
})

export class ProfilesCreateComponent implements OnInit {

  isProfileValid: boolean;
  heading: string;
  states: SelectListItem[];
  profileTypes: SelectListItem[];
  yesNo: SelectListItem[];

  // public profileForm: FormGroup;
  public profileForm = this.formBuilder.group({
    Id: ['', []],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    streetAddress1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    streetAddress2: ['', [Validators.maxLength(50)]],
    suburb: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    postcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(50)]],
    phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    type: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    additionalEmail: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    additionalPhone: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    canAccessProfiles: ['', [Validators.required]],
    canAddProfile : ['', [Validators.required]],
    canEditProfile : ['', [Validators.required]],
    canAccessProjects : ['', [Validators.required]],
    canAddProject : ['', [Validators.required]],
    canEditProject : ['', [Validators.required]],
    deleted: ['N', []],
    //password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    //passwordConfirmed: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  });

  selectedCar: number;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  
  profileId = this.activatedRoute.snapshot.params['id'];
  profileType = this.activatedRoute.snapshot.params['type'];

  // Form Values for Edit Mode
  existingProfile: Profile;
  firstName: string;
  lastName: string;
  streetAddress1: string;
  streetAddress2: string;
  suburb: string;
  postcode: string;
  email: string;
  phone: string;
  additionalEmail: string;
  additionalPhone: string;
  password: string;
  canAccessProfiles: string;
  canAddProfile : string;
  canEditProfile :string;
  canAccessProjects : string;
  canAddProject : string;
  canEditProject : string;

  securityObject : AppUserAuth = null;


  constructor(private formBuilder: FormBuilder, private profileServices: ProfilesService, 
              private activatedRoute: ActivatedRoute, private router: Router, 
              private securityService : SecurityService) {
                
       this.securityObject = securityService.securityObject;
    // private config: NgSelectConfig
    // this.config.notFoundText = 'Custom not found';
    // this.config.appendTo = 'body';
  }

  ngOnInit(): void {

    //Fetches states from services
    this.profileServices.fetchStates().subscribe(data => {
      this.states = data;
      console.log("States : ", this.states);
    });

    this.profileServices.fetchProfileTypes().subscribe(data => {
      this.profileTypes = data;
      console.log("ProfileTypes : ", this.profileTypes);
    });

    this.profileServices.fetchYesNo().subscribe(data => {
       this.yesNo = data;
    });

    console.log("profileId : ", this.profileId);
    console.log("type : ", this.profileType);
    this.profileForm.controls.Id.setValue(this.profileId);

    if ((this.profileId != null && this.profileId != undefined && this.profileId != '') && (this.profileType != null && this.profileType != undefined && this.profileType != '')) {
      this.heading = "Edit a Profile";
      this.profileServices.fetchProfile(this.profileId, this.profileType).subscribe(
        (profileData: ProfileModel) => {
          this.profileForm.controls.firstName.setValue(profileData.Profile.FirstName);
          this.profileForm.controls.lastName.setValue(profileData.Profile.LastName);
          this.profileForm.controls.streetAddress1.setValue(profileData.Profile.StreetAddress1);
          this.profileForm.controls.streetAddress2.setValue(profileData.Profile.StreetAddress2);
          this.profileForm.controls.suburb.setValue(profileData.Profile.Suburb);
          this.profileForm.controls.state.setValue(profileData.Profile.State);
          this.profileForm.controls.postcode.setValue(profileData.Profile.Postcode);
          this.profileForm.controls.email.setValue(profileData.Profile.Email);
          this.profileForm.controls.phone.setValue(profileData.Profile.Phone);
          this.profileForm.controls.additionalEmail.setValue(profileData.Profile.AdditionalEmail);
          this.profileForm.controls.additionalPhone.setValue(profileData.Profile.AdditionalPhone);
          this.profileForm.controls.type.setValue(profileData.Profile.Type);
          this.profileForm.controls.password.setValue(profileData.Profile.Password);
          this.profileForm.controls.canAccessProfiles.setValue(profileData.Profile.CanAccessProfiles);
          this.profileForm.controls.canAddProfile.setValue(profileData.Profile.CanAddProfile);
          this.profileForm.controls.canEditProfile.setValue(profileData.Profile.CanEditProfile);
          this.profileForm.controls.canAccessProjects.setValue(profileData.Profile.CanAccessProjects);
          this.profileForm.controls.canAddProject.setValue(profileData.Profile.CanAddProject);
          this.profileForm.controls.canEditProject.setValue(profileData.Profile.CanEditProject);
          this.profileForm.controls.deleted.setValue(profileData.Profile.Deleted);
        });
    }
    else {
      this.heading = "Create a Profile";
    }
  }

  saveProfile() {
    // this.findInvalidControls();
    if (this.profileId !== null && this.profileId !== undefined) {
      this.editProfile(this.profileForm);
    }
    else {
      this.createProfile(this.profileForm);
    }
  }

  createProfile(profileForm: FormGroup) {
    if (profileForm.valid) {
      this.isProfileValid = true;
      this.profileServices.createProfile(this.profileForm.value).subscribe((data: {}) => {
        this.router.navigate(['/profiles'], { relativeTo: this.activatedRoute });
      })
      console.log(this.profileForm.value);
    } else {

      console.log("Invalid Form!");
    }
  }

  editProfile(profileForm: FormGroup) {
    if (profileForm.valid) {
      //this.isProfileValid = true;
      this.profileServices.editProfile(this.profileForm.value).subscribe((data: {}) => {
        this.router.navigate(['/profiles'], { relativeTo: this.activatedRoute });
      })
      console.log(this.profileForm.value);
    } else {
      console.log("Invalid Form!");
    }
  }

  fetchProfile(profileId: string, type: string) {
    this.profileServices.fetchProfile(profileId, type).subscribe(
      (profileData: ProfileModel) => {
        this.existingProfile = profileData.Profile;
      });
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.profileForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
        console.log("Invalid Control : ", name);
      }
    }
    return invalid;
  }


  onCancel() {
    this.router.navigate(['/profiles']);
  }

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

}
