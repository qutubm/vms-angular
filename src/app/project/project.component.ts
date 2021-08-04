import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Project, ProjectsModel } from './project.model';
import { ProjectService } from './project.service';
@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  @Input() single_ProjectData: Project[]
  //listStaffMembers: any[] = [];
  
  constructor(private projectServices: ProjectService, private ngxSpinner: NgxSpinnerService) {}  //

  ngOnInit(): void {
    this.loadAllProjects();
  }
  
  loadAllProjects() {
    this.ngxSpinner.show();

    this.projectServices.getAllProjects().subscribe(
      (projectModel: ProjectsModel) => {   
        this.projects = projectModel.Projects;
        this.ngxSpinner.hide();

        //console.log(this.ProjectsView[2].Name);
        //console.log("1st Profile : " + this.ProfilesModel[0]
      },
      (err: any) => console.log(err),
      () => console.log(this.projects),
    );

  }



  // viewProjectTask(projectIndex){
  //   let projectObject = this.projects.filter(x => x.Id === projectIndex);
  //   this.single_ProjectData = projectObject;

  //   console.log(this.single_ProjectData);
  // }


}
