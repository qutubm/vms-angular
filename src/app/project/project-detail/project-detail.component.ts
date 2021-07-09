import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Projects, ProjectsExtra } from '../project.model'
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  ProjectsView: Projects[] = [];
  ngOnInit(): void {
    this.loadAllProjects();
  }
   constructor(private actingRoute: ActivatedRoute, private projectServices: ProjectService) { }
  // active = 1;
  projectID = this.actingRoute.snapshot.params['id'];


  loadAllProjects() {
    this.projectServices.getAllProjects().subscribe(
      (projects_data: ProjectsExtra) => {        
        this.ProjectsView = projects_data.Projects;
        let projectObjectExtraction = this.ProjectsView.filter(x => x.Id === this.projectID);
        this.ProjectsView = projectObjectExtraction;
        //console.log("1st Profile : " + this.ProfilesModel[0]
      },
      (err: any) => console.log(err),
      () => console.log(this.ProjectsView),
    );
  }

  
}
