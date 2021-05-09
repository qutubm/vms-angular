import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-profiles-create',
  templateUrl: './profiles-create.component.html',
  styleUrls: ['./profiles-create.component.css']
})
export class ProfilesCreateComponent implements OnInit {

  profileCreate: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.profileCreate = this.formBuilder.group({
      profile_email: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_passwordConfirmed: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_suburb: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]]
    })

    //Set value to the form
    const profilePrefilled ={
      profile_email: 'Name of Project',
      profile_password: 'Password',
      profile_passwordConfirmed: 'Password Confirmed',
    }
    //this.profileCreate.setValue(profilePrefilled);
    //this.profileCreate.patchValue(profilePrefilledVersion2)
    //this.profileCreate.reset(); //Resets the entered value of all 
  }

  ngOnInit(): void {
  }

  postData() {
    //console.log(this.profileCreate.value)// Print the value to the console
    //console.log("The email is:" + this.profileCreate.get('profile_email').value) // Print the value to the profile create
  }

}
