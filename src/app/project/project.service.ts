import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProjectMembers} from '../shared/models/project-members.model'
import { Projects, ProjectsExtra } from './project.model';
import { ProjectTaskModel } from '../shared/models/project-task.model'

import { retry, catchError } from 'rxjs/operators';

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
  
  
  rest_locationProject = 'https://vmswebapi20210604233544.azurewebsites.net/api/Project/';


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // getAllProfiles(): Observable<Profiles[]> {
  //   return this.http.get<Profiles[]>(this.rest_location)
  // }

  getProject(): Observable<ProjectsExtra> {
    return this.http.get<ProjectsExtra>(this.rest_locationProject + 'GetProjects')
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  getProjectByID(id): Observable<ProjectsExtra> {
    return this.http.get<ProjectsExtra>(this.rest_locationProject + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createProject(projectData): Observable<Projects> {
    return this.http.post<Projects>(this.rest_locationProject, JSON.stringify(projectData), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  


  deleteProjectByID(id){
    return this.http.delete<Projects>(this.rest_locationProject + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }





  


  // getAllMembersByID(id): Observable<ProjectMembers[]> {
  //   return this.http.get<ProjectModel>(this.rest_location + '/' + id)
  //     .pipe(
  //       map( (project) =>  project.project_members.map(proj_members => <ProjectMembers[]>{ id: project})),
  //       tap(mappedItems => console.log(mappedItems))
  //     );
  // }

  getProjectTask(): Observable<ProjectTaskModel[]> {
    return this.http.get<ProjectTaskModel[]>(this.rest_locationProject)
      .pipe(
        retry(1),
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

  // At this moment I can't manipulate nested objects using services.
  // "members": [1,2,3],
  // "faq": [
  //   {
  //     "faq_question": "faq_question",
  //     "faq_answer": "faq_answer"
  //   },
  //   {
  //     "faq_question": "faq_question",
  //     "faq_answer": "faq_answer"
  //   },
  //   {
  //     "faq_question": "faq_question",
  //     "faq_answer": "faq_answer"
  //   }
  // ]
}
