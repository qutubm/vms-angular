import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileForm : FormGroup;
  emailMessage: string;

  constructor(private profileService : ProfileService, private fb : FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastName : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      additionalEmail : ['', [Validators.required, Validators.email]],
      additionalPhone : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      type : 'Staff',
      streetAddress1: ['', Validators.required],
      streetAddress2: '',
      suburb: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', Validators.required]
    });
  }

 save(){
  this.router.navigate(['/products']);
 }

 cancel(){
  this.router.navigate(['/products']);
 }

}
