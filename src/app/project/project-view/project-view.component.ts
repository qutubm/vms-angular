import {
  Component,
  OnInit,
  //ComponentFactoryResolver,
  //ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects, ProjectsExtra } from '../project.model';
import { ProjectService } from '../project.service';
//import { ProjectTaskDetailComponent } from './project-task/project-task-detail.component';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
})
export class ProjectViewComponent implements OnInit {
  constructor(
    private projectIDActingRoute: ActivatedRoute,
    private projectServices: ProjectService,
    //private viewContainerRef: ViewContainerRef,
    //private cfr: ComponentFactoryResolver
  ) {}

  ProjectsView: Projects[] = [];
  active = 1;
  projectID = this.projectIDActingRoute.snapshot.params['id'];

  ngOnInit(): void {}

  loadAllProjects() {
    this.projectServices.getAllProjects().subscribe(
      (projects_data: ProjectsExtra) => {
        this.ProjectsView = projects_data.Projects;
        let projectObjectExtraction = this.ProjectsView.filter(
          (x) => x.Id === this.projectID
        );
        this.ProjectsView = projectObjectExtraction;
        //console.log("1st Profile : " + this.ProfilesModel[0]
      },
      (err: any) => console.log(err),
      () => console.log(this.ProjectsView)
    );
  }

  async getLazy1() {
    //this.viewContainerRef.clear();
    // const { ProjectTaskDetailComponent } = await import(
    //   //'./project-task/project-task-detail.component'
    // );
    // this.viewContainerRef.createComponent(
    //   this.cfr.resolveComponentFactory(ProjectTaskDetailComponent)
    // );
  }
}
