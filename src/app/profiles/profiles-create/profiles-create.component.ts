import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

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
    const profilePrefilled = {
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

  public model: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}


// import {Observable, OperatorFunction} from 'rxjs';
// import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

// const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
//   'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
//   'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
//   'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
//   'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
//   'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


// @Component({
//   selector: 'ngbd-typeahead-basic',
//   templateUrl: './profiles-create.component.html',
//   styles: [`.form-control { width: 300px; }`]
// })
// export class NgbdTypeaheadBasic {
//   public model: any;

//   search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
//     text$.pipe(
//       debounceTime(200),
//       distinctUntilChanged(),
//       map(term => term.length < 2 ? []
//         : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
//     )

// }
