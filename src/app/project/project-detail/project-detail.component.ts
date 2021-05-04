import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectModel } from '../../shared/models/project.model'
import { ProjectService } from '../../shared/service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  constructor(private actingRoute: ActivatedRoute, private projectsServices: ProjectService) { }
  active = 1;
  id = this.actingRoute.snapshot.params['id'];

  ProjectModel: any;
  
  ngOnInit(): void {
    this.projectsServices.getProjectByID(this.id).subscribe(
      (project_data: ProjectModel) =>
        this.ProjectModel = project_data,
      (err: any) => console.log(err),
      () => console.log("Project is acquired!")
    );
  }
}
