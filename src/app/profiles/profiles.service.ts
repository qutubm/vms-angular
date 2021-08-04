import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetProfileInputModel, Profile, ProfileModel, ProfilesModel } from './profiles.model';
import { SelectListItem } from '../shared/models/selectListItem';


@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  // ProfilesModel: ProfilesExtra[] = []; //Can be used to determine
  rest_locationProfile = 'https://vmswebapi20210604233544.azurewebsites.net/api/Profile/';

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


  getProfiles(): Observable<ProfilesModel> {
    return this.http.get<ProfilesModel>(this.rest_locationProfile + 'GetProfiles')
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

  createProfile(profile) {
    return this.http.post<Profile>(this.rest_locationProfile + 'AddProfile', JSON.stringify(profile), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  editProfile(profile) {
    console.log("Edit Profile : ", profile);
    return this.http.post<Profile>(this.rest_locationProfile + 'EditProfile', JSON.stringify(profile), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  fetchProfile(id : string, type: string) : Observable<ProfileModel>
  {
      return this.http.get<ProfileModel>(this.rest_locationProfile + 'FetchProfile?id=' + id + '&type=' + type) // JSON.stringify(inputModel)) 
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  fetchStates(): Observable<SelectListItem[]>
  {
    let states : SelectListItem[] = [];
    states.push(Object.assign(new SelectListItem(), {Text : "New South Wales", Value : "NSW", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Victoria", Value : "VIC", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Queensland", Value : "QLD", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "South Australia", Value : "SA", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Western Australia", Value : "WA", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Tasmania", Value : "TAS", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Australian Capital Territory", Value : "ACT", Selected : false }));
    states.push(Object.assign(new SelectListItem(), {Text : "Northern Territory", Value : "NT", Selected : false }));
    return of(states);
  }

  fetchProfileTypes() : Observable<SelectListItem[]>
  {
    let profileTypes : SelectListItem[] = [];
    profileTypes.push(Object.assign(new SelectListItem(), {Text : "Staff", Value : "Staff", Selected : false }));
    profileTypes.push(Object.assign(new SelectListItem(), {Text : "Volunteer", Value : "Volunteer", Selected : false }));
    return of(profileTypes);
  }

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
