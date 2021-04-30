import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
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

  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.rest_location)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }

  getProjectByID(id): Observable<Project[]> {
    return this.http.get<Project[]>(this.rest_location + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createEmployee(employee): Observable<Project[]> {
    return this.http.post<Project[]>(this.rest_location + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  


  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
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
