import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  listStaffMembers: any[] = [];
  projectCreate: FormGroup;

  ngOnInit(): void {
  }
  constructor(private formBuilder: FormBuilder) {
    this.projectCreate = this.formBuilder.group({
      project_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      project_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      project_staff: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      project_volunteers: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    })
  }

  addVolunteerToList(userInput): void {
    if (userInput === null || userInput === undefined || userInput == "") {
      console.warn("Cannot be empty!");
    } else {
      this.listStaffMembers.push({user_email: userInput });
      console.log(this.listStaffMembers);
    }
  }

  deleteVolunteerFromList(emailIndex) {
    const index: number = this.listStaffMembers.indexOf(emailIndex);
    this.listStaffMembers.splice(index, 1);
  }

  createProject() {

  }

}
