import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../shared/models/project.model';
import { ProjectService } from '../shared/service/project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  allProjects: any = [];


  constructor(private route: ActivatedRoute, private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    return this.projectServices.getProject().subscribe((data: {}) => {
      this.allProjects = data;
      console.log(data);
    })
  }

  

}
