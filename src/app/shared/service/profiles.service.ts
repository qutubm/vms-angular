import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { ProfilesModel } from '../models/profiles.model';
//import { ProfilesRestricted } from '../models/profiles.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  Profiles: any = []; //Can be used to determine
  rest_locationProfile = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getProfiles(): Observable<ProfilesModel[]> {
    return this.http.get<ProfilesModel[]>(this.rest_locationProfile)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  getProfilesByID(id): Observable<ProfilesModel[]> {
    return this.http.get<ProfilesModel[]>(this.rest_locationProfile + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  
  getProfileByRole(role) {
    //To do: Figure out how to best consume rest services based on role. Problem: The suburb, state, and phone cannot be viewed by the volunteer. 
  }


  deleteEmployee(id){
    return this.http.delete<ProfilesModel>(this.rest_locationProfile + '/delete/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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
