import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProjectTaskModel } from '../shared/models/project-task.model'

import { retry, catchError } from 'rxjs/operators';
import { Project, ProjectModel, ProjectsModel, ResourcesModel, Task, TaskModel, TasksModel } from './project.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})

/* 
Project Services gets all the information about the project. It will ask the following question from the server:
- What are the project's related to the user?
- What can the user do in the project?
- Who are the members of the project?
- What are the details of the project?
*/
export class ProjectService {
  
  profileApi = 'https://vmswebapi20210604233544.azurewebsites.net/api/Profile/';
  projectApi = 'https://vmswebapi20210604233544.azurewebsites.net/api/Project/';
  taskApi = 'https://vmswebapi20210604233544.azurewebsites.net/api/Task/';


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllProjects(): Observable<ProjectsModel> {
    return this.http.get<ProjectsModel>(this.projectApi + 'GetProjects')
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  fetchProject(id: string) : Observable<ProjectModel> {
    return this.http.get<ProjectModel>(this.projectApi + 'FetchProject?id=' + id)
                    .pipe(
                      retry(1),
                      catchError(this.handleError));
  }

  createProject(project) {
    return this.http.post<Project>(this.projectApi + 'AddProject', JSON.stringify(project), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editProject(project) {
    return this.http.post<Project>(this.projectApi + 'EditProject', JSON.stringify(project), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllTasks(projectId : string) : Observable<TasksModel>
  {
      return this.http.get<TasksModel>(this.taskApi + 'GetTasks?projectId=' + projectId)
      .pipe(retry(1),
      catchError(this.handleError));
  }

  fetchTask(taskId : string) : Observable<TaskModel>
  {
      return this.http.get<TaskModel>(this.taskApi + 'FetchTask?taskId=' + taskId)
      .pipe(retry(1),
      catchError(this.handleError));
  }

  addTask(task : Task)
  {
    return this.http.post<Task>(this.taskApi + 'AddTask', JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError));
  }

  editTask(task : Task)
  {
    return this.http.post<Task>(this.taskApi + 'EditTask', JSON.stringify(task), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError));
  }
  
  fetchResources()
  {
     return this.http.get<ResourcesModel>(this.profileApi + 'GetResources')
                     .pipe(retry(1), 
                     catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
