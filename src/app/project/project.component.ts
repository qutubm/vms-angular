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
  
  

  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    //this.loadAllProjects();
    this.projectServices.getProject().subscribe(
      (project_data: ProjectModel[]) => {
        this.ProjectModel = project_data
      },
      (err: any) => console.log(err),
      () => console.log("Projects")
    );
  }

  // loadAllProjects() {
  //   return this.projectServices.getProject().subscribe((data: {}) => {
  //     this.ProjectsModel = data;
  //     console.log(this.ProjectsModel);
  //   })
  // }

  

}
