import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ProjectModel } from '../models/project.model';
import { ProjectMembers} from '../models/project-members.model'
import { ProjectTaskModel } from '../models/project-task.model'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  rest_location = 'http://localhost:3000/Project';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getProject(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.rest_location)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  getProjectByID(id): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(this.rest_location + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getAllMembers(id): Observable<ProjectMembers[]> {
    return this.http.get<ProjectMembers[]>(this.rest_location + '/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  


  // getAllMembersByID(id): Observable<ProjectMembers> {
  //   return this.http.get<ProjectModel>(this.rest_location + '/' + id)
  //     .pipe(
  //       map( ({proj_members}) => <ProjectMembers>{
  //           project_membersID: proj_members
  //       })
  //     );
  // }

  getProjectTask(): Observable<ProjectTaskModel[]> {
    return this.http.get<ProjectTaskModel[]>(this.rest_location)
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

  // This is the 
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
