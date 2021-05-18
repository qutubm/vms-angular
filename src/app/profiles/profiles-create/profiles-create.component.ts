import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { ProfilesService } from '../../shared/service/profiles.service';


const states = ['Victoria', 'New South Wales', 'Tasmania', 'Queensland'];

@Component({
  selector: 'app-profiles-create',
  templateUrl: './profiles-create.component.html',
  styleUrls: ['./profiles-create.component.css']
})

export class ProfilesCreateComponent implements OnInit {
  
  profileCreate: FormGroup;

  constructor(private formBuilder: FormBuilder, private profileServices: ProfilesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.profileCreate = this.formBuilder.group({
      profile_email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(2), Validators.maxLength(50)]],
      profile_password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_passwordConfirmed: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      profile_firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_suburb: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      profile_additionalEmail: ['', [Validators.minLength(2), Validators.maxLength(50)]],
      profile_additionalPhone: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    })
  }

  ngOnInit(): void {

  }


  createProfile() {
    this.profileServices.createProfile(this.profileCreate.value).subscribe((data: {}) => {
      this.router.navigate(['/profiles'], { relativeTo: this.activatedRoute });
    })
    
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )


}
