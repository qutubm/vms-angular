import {
  Component, OnInit, ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects, ProjectsExtra } from '../project.model'
import { ProjectService } from '../project.service';
import { ProjectTaskDetailComponent } from './project-task/project-task-detail.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private actingRoute: ActivatedRoute, private projectServices: ProjectService, private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver) { }

  ProjectsView: Projects[] = [];
  active = 1;
  projectID = this.actingRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.loadAllProjects();
  }


  


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

  async getLazy1() {

    this.viewContainerRef.clear();
    const { ProjectTaskDetailComponent } = await import('./project-task/project-task-detail.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ProjectTaskDetailComponent)
    );
  }


  loadInformationTabs() {
    let hello = async () => {
        this.viewContainerRef.clear();
        const { ProjectTaskDetailComponent } = await import('./project-task/project-task-detail.component');
        this.viewContainerRef.createComponent(
          this.cfr.resolveComponentFactory(ProjectTaskDetailComponent)
        );
    }
    if (this.active == 1) {
      
    } else if (this.active == 2) {

    }
  }


}
