import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  
  projectCreate: FormGroup;
  constructor(private formBuilder: FormBuilder, private projectServices: ProjectService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  
  ngOnInit(): void {
    this.projectCreate = this.formBuilder.group({
      Id: ['', [Validators.maxLength(50)]],
      Name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      DueDate: ['', [Validators.maxLength(50)]],
      CreatedDate: ['', [Validators.maxLength(50)]],
      EstimatedDueDate: ['', [ Validators.minLength(2), Validators.maxLength(50)]],
      Type:['', [Validators.maxLength(50)]],
      SkillsRequired: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      Completed: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    })
  }


  addVolunteerToList(userInput): void {
    if (this.projectCreate.valid) {
      
    } else {
      console.warn("Invalid Create");
    }
  }

  createProject() {
    if (this.projectCreate.valid) {
      console.log(this.projectCreate.value);
      this.projectServices.createProject(this.projectCreate.value).subscribe((data: {}) => {
        this.router.navigate(['/project'], { relativeTo: this.activatedRoute });
      })
      
      console.log(this.projectCreate.value);
    } else {
      console.log("Invalid Form!");
    }
  }

  deleteVolunteerFromList(emailIndex) {
    //const index: number = this.listStaffMembers.indexOf(emailIndex);
    //this.listStaffMembers.splice(index, 1);
  }

  viewProjectTask(projectIndex){
    console.log(projectIndex);
  }



}
