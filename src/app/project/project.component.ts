import { Component, OnInit, Input } from '@angular/core';
import { ProjectsExtra, Projects } from './project.model';
import { ProjectService } from './project.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  ProjectsView: Projects[] = [];
  @Input() single_ProjectData: Projects[]
  //listStaffMembers: any[] = [];
  
  constructor(private projectServices: ProjectService) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }
  
  loadAllProjects() {
    this.projectServices.getAllProjects().subscribe(
      (projects_data: ProjectsExtra) => {        
        this.ProjectsView = projects_data.Projects;
        //console.log(this.ProjectsView[2].Name);
        //console.log("1st Profile : " + this.ProfilesModel[0]
      },
      (err: any) => console.log(err),
      () => console.log(this.ProjectsView),
    );
  }



  viewProjectTask(projectIndex){
    let projectObject = this.ProjectsView.filter(x => x.Id === projectIndex);
    this.single_ProjectData = projectObject;

    console.log(this.single_ProjectData);
  }
}
