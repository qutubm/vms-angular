import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { AppUser } from "./models/appUser";
import { AppUserAuth } from "./models/appUserAuth";
import { LOGIN_MOCKS } from './models/LOGIN_MOCKS';

@Injectable({
    providedIn: 'root'
  })
export class SecurityService {

    securityApi = 'https://vmswebapi20210604233544.azurewebsites.net/api/Security/';
    // securityApi = 'https://localhost:7001/api/Security/';
    securityObject: AppUserAuth = new AppUserAuth();

    constructor(private http: HttpClient){
        let securityObj = window.sessionStorage.getItem("SecurityObject");
        if(securityObj != null && securityObj != undefined && securityObj != "")
        {
            console.log("Security Object : ", JSON.parse(securityObj));
            let parsedSecurityObject = JSON.parse(securityObj);

            this.securityObject.userName = parsedSecurityObject.userName;
            this.securityObject.bearerToken = parsedSecurityObject.bearerToken;
            this.securityObject.isAuthenticated = parsedSecurityObject.isAuthenticated;

            this.securityObject.canAccessProfiles = parsedSecurityObject.canAccessProfiles; // == "Y" ? true : false;
            this.securityObject.canAddProfile = parsedSecurityObject.canAddProfile; // == "Y" ? true : false;
            this.securityObject.canEditProfile = parsedSecurityObject.canEditProfile; // == "Y" ? true : false;

            this.securityObject.canAccessProjects = parsedSecurityObject.canAccessProjects; // == "Y" ? true : false;
            this.securityObject.canAddProject = parsedSecurityObject.canAddProject; // == "Y" ? true : false;
            this.securityObject.canEditProject = parsedSecurityObject.canEditProject; // == "Y" ? true : false;


            //this.securityObject = JSON.parse(securityObj);
        }
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }

    login(entity : AppUser):  Observable<AppUserAuth>{
        // Initialize security object
        this.resetSecurityObject();

        return this.http.post<AppUserAuth>(this.securityApi + "Login",
                                entity, this.httpOptions).pipe(
                                    tap( resp => {
                                        Object.assign(this.securityObject, resp);
                                        // Store into local storage
                                        localStorage.setItem("bearerToken", this.securityObject.bearerToken);
                                        window.sessionStorage.setItem("isAuthenticated", "true");
                                        window.sessionStorage.setItem("securityObject", JSON.stringify(this.securityObject));
                                    }));

        // Object.assign(this.securityObject,
        //         LOGIN_MOCKS.find(user => user.UserName.toLowerCase() ===
        //                                  entity.userName.toLowerCase()));
        // if(this.securityObject.UserName !== ""){
        //     // Store toekn into local storage
        //     localStorage.setItem("BearerToken", this.securityObject.BearerToken);
        // }

        // return of<AppUserAuth>(this.securityObject);
    }

    logout() : void {
        this.resetSecurityObject();
        window.sessionStorage.setItem("isAuthenticated", "false");
    }

    resetSecurityObject(){
        this.securityObject.userName = "";
        this.securityObject.bearerToken = "";
        this.securityObject.isAuthenticated = false;

        this.securityObject.canAccessProfiles = 'N';
        this.securityObject.canAccessProjects = 'N';
        this.securityObject.canAddProfile = 'N';
        this.securityObject.canAddProject = 'N';
        this.securityObject.canEditProfile = 'N';
        this.securityObject.canEditProject = 'N';
        localStorage.removeItem("bearerToken");
        window.sessionStorage.removeItem("isAuthenticated");
        window.sessionStorage.removeItem("securityObject");
    }



}


