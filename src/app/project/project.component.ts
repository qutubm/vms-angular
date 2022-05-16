import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppUserAuth } from '../shared/models/appUserAuth';
import { SecurityService } from '../shared/security.service';
import { Project, ProjectsModel } from './project.model';
import { ProjectService } from './project.service';
@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  securityObject: AppUserAuth = null;

  @Input() single_ProjectData: Project[]
  //listStaffMembers: any[] = [];

  constructor(private projectServices: ProjectService, private ngxSpinner: NgxSpinnerService,
    private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit(): void {
    this.loadAllProjects();
  }

  async loadAllProjects() {
    this.ngxSpinner.show();

    this.projectServices.getAllProjects().subscribe(
      (projectModel: ProjectsModel) => {
        this.projects = projectModel.Projects;
      },
      (err: any) => { console.log(err); this.ngxSpinner.hide(); },
      () => { console.log(this.projects); this.ngxSpinner.hide(); },
    );

  }



  // viewProjectTask(projectIndex){
  //   let projectObject = this.projects.filter(x => x.Id === projectIndex);
  //   this.single_ProjectData = projectObject;

  //   console.log(this.single_ProjectData);
  // }


}
