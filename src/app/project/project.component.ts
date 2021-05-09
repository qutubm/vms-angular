import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectModel } from '../shared/models/project.model';
import { ProjectService } from '../shared/service/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ProjectModel: ProjectModel[] = [];
  listStaffMembers: any[] = [];
  
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects() {
    this.projectServices.getProject().subscribe(
      (project_data: ProjectModel[]) => {
        this.ProjectModel = project_data
      },
      (err: any) => console.log(err),
      () => console.log("Projects")
    );
  }

  deleteProjectByID(id) {
    console.log(id);
    if (window.confirm('Are you sure, you want to delete?')){
      this.projectServices.deleteProjectByID(id).subscribe(() => {
        this.loadProjects();
      })
    }
  }


}
