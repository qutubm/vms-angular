import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles-invite',
  templateUrl: './profiles-invite.component.html',
  styleUrls: ['./profiles-invite.component.css']
})

export class ProfilesInviteComponent implements OnInit {

  inviteUsers: FormGroup
  userEmailInvitationList: any[] = [];

  constructor(private formBuilder: FormBuilder, ) { 
    this.inviteUsers = this.formBuilder.group({
      profile_email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(2), Validators.maxLength(50)]],
      profile_role: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    })
  }

  ngOnInit(): void {
  }

  addEmailFromList(): void {
    if (this.inviteUsers.get('profile_email').value == "" || this.inviteUsers.get('profile_role').value == "") {
      console.warn("Email address is empty!");
    } else {
      this.userEmailInvitationList.push({profile_email: this.inviteUsers.get('profile_email').value, profile_role: this.inviteUsers.get('profile_role').value});
      console.log(this.userEmailInvitationList);
    }
  }

  deleteEmailFromList(emailIndex) {
    const index: number = this.userEmailInvitationList.indexOf(emailIndex);
    this.userEmailInvitationList.splice(index, 1);
  }

  onInvite() {
    if (this.userEmailInvitationList.length <= 0){
      console.log("No email is added to the list!")
    }
    else{
      
    }
  }

  
}
