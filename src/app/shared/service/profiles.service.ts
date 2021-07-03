import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ProfilesModel } from '../models/profiles.model';


@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  ProfilesModel: ProfilesModel[] = []; //Can be used to determine
  rest_locationProfile = 'https://vmswebapi20210604233544.azurewebsites.net/api/profile/getprofiles';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Accept': 'application/json, text/plain, */*',
      // 'Access-Encoding': 'gzip, deflate',       
      // 'Access-Control-Allow-Origin': '*',       
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',       
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  }


  getProfiles(): Observable<any[]> {
    return this.http.get<any>(this.rest_locationProfile)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  // getProfilesByID(id): Observable<Profiles> {
  //   return this.http.get<Profiles>(this.rest_locationProfile + '/' + id)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError));
  // }

  // createProfile(profile) {
  //   return this.http.post<Profiles>(this.rest_locationProfile, JSON.stringify(profile), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // deleteProfileByID(id){
  //   return this.http.delete<Profiles>(this.rest_locationProfile + '/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

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
