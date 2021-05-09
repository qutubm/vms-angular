import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles-invite',
  templateUrl: './profiles-invite.component.html',
  styleUrls: ['./profiles-invite.component.css']
})
export class ProfilesInviteComponent implements OnInit {


  invitation_listOfEmails: any[] = [];
  txtUserEmail;
  rdbRole;
  constructor() { }

  ngOnInit(): void {
  }

  addEmailFromList(userInput, roleType): void {
    if (userInput === null || userInput === undefined || userInput == "") {
      console.warn("Email address is empty!");
    } else {
      this.invitation_listOfEmails.push({user_email: userInput, role: roleType});
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
