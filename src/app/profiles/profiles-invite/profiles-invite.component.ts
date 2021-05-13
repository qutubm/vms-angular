import { Component, OnInit } from '@angular/core';
import { InviteModel } from './profile-invite.model';

@Component({
  selector: 'app-profiles-invite',
  templateUrl: './profiles-invite.component.html',
  styleUrls: ['./profiles-invite.component.css']
})
export class ProfilesInviteComponent implements OnInit {


  invitation_listOfEmails: InviteModel[] = [];
  txtUserEmail;
  rdbRole;
  constructor() { }

  ngOnInit(): void {
  }

  addEmailFromList(userInput, roleType): void {
    if (userInput === null || userInput === undefined || userInput == "") {
      console.warn("Email address is empty!");
    } else {
      this.invitation_listOfEmails.push({user_email: userInput, user_role: roleType});
      console.log(this.invitation_listOfEmails);
    }
  }

  deleteEmailFromList(emailIndex) {
    const index: number = this.invitation_listOfEmails.indexOf(emailIndex);
    this.invitation_listOfEmails.splice(index, 1);
  }

  onSubmit() {

  }


}
