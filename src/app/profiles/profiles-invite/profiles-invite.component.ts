import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profiles-invite',
  templateUrl: './profiles-invite.component.html',
  styleUrls: ['./profiles-invite.component.css']
})

export class ProfilesInviteComponent {

  inviteFormGroup: FormGroup
  userEmailInvitationList: any[] = [];

  constructor(private formBuilder: FormBuilder,) {
    this.inviteFormGroup = this.formBuilder.group({
      profile_email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.minLength(2), Validators.maxLength(50)]],
      profile_role: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    })
  }


  addEmailFromList() {
    //Push an item to an array list called: userEmailInvitationList
    this.userEmailInvitationList.push({ profile_email: this.inviteFormGroup.get('profile_email').value, profile_role: this.inviteFormGroup.get('profile_role').value });
    console.log(this.userEmailInvitationList);

    //Reset the validation including user warning
    this.resetInviteForm();
  }

  resetInviteForm() {
    this.inviteFormGroup.reset();
  }

  validateForm() {
    if (this.inviteFormGroup.get('profile_email').invalid || this.inviteFormGroup.get('profile_role').invalid) {

      //console.log("Profile Email is invalid: " + this.inviteFormGroup.get('profile_email').invalid)
      if (this.inviteFormGroup.get('profile_email').pristine || this.inviteFormGroup.get('profile_email').untouched) {
        console.log("Email is pristine and untouched");
        this.inviteFormGroup.get('profile_email').markAsDirty();
        this.inviteFormGroup.get('profile_email').markAsTouched();
      }


      if (this.inviteFormGroup.get('profile_role').pristine || this.inviteFormGroup.get('profile_role').untouched) {
        console.log("Role is pristine and untouched");
        this.inviteFormGroup.get('profile_role').markAsDirty();
        this.inviteFormGroup.get('profile_role').markAsTouched();
      }


    } else {
      //This validates whether the invitation is for volinteer, staff, or teamleader.
      console.log("It's valid!");
      if (this.inviteFormGroup.get('profile_role').value == "volunteer") {
        this.addEmailFromList();
      } else if (this.inviteFormGroup.get('profile_role').value == "staff") {
        //Alert window asking if they want to add the invitee as staff member
        if (window.confirm('Are you sure, to Invite person as a staff member?')) {
          this.addEmailFromList();
        } else {
          this.inviteFormGroup.get('profile_role').setValue('');
        }
      } else if (this.inviteFormGroup.get('profile_role').value == "teamleader") {
        //Alert window asking if they want to add the invitee as team leader.
        if (window.confirm('Are you sure, to Invite person as a teamleader member?')) {
          this.addEmailFromList();
        } else {
          this.inviteFormGroup.get('profile_role').setValue('');
        }
      }

    }




    // if ((this.inviteFormGroup.get('profile_role').pristine || this.inviteFormGroup.get('profile_role').untouched)) {
    //   if (this.inviteFormGroup.get('profile_role').value == "volunteer") {
    //     this.addEmailFromList();
    //   } else if (this.inviteFormGroup.get('profile_role').value == "staff") {
    //     this.addEmailFromList()
    //   } else if (this.inviteFormGroup.get('profile_role').value == "teamleader") {

    //   }
    // }

  }

  deleteEmailFromList(emailIndex): void {
    const index: number = this.userEmailInvitationList.indexOf(emailIndex);
    this.userEmailInvitationList.splice(index, 1);
  }

  onInvite(): void {
    if (this.userEmailInvitationList.length >= 1) {
      console.log(JSON.stringify(this.userEmailInvitationList));
    } else if (this.userEmailInvitationList.length <= 0) {
      if (window.confirm('')) {
        this.addEmailFromList();
      } else {
        this.inviteFormGroup.get('profile_role').setValue('');
      }
    } else {
      console.log("An Error has occured!")
    }
  }


}
