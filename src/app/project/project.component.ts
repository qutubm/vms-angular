import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsExtra, Projects } from './project.model';
import { ProjectService } from './project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ProjectsView: Projects[] = [];

  //listStaffMembers: any[] = [];
  
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }


  loadAllProjects() {
    this.projectServices.getAllProjects().subscribe(
      (projects_data: ProjectsExtra) => {        
        this.ProjectsView = projects_data.Projects;
        console.log(this.ProjectsView[2].Name);
        //console.log("1st Profile : " + this.ProfilesModel[0]);
      },
      (err: any) => console.log(err),
      () => console.log(this.ProjectsView),
    );
  }

  // deleteProjectByID(id) {
  //   console.log(id);
  //   if (window.confirm('Are you sure, you want to delete?')){
  //     this.projectServices.deleteProjectByID(id).subscribe(() => {
  //       this.loadProjects();
  //     })
  //   }
  // }
}
