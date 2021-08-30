import { Injectable, NgModule } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    var token = localStorage.getItem("bearerToken");

    if(token) {
      req = req.clone({     
        
           headers: req.headers.set('Authorization', 'Bearer ' + token)
                               .set('Content-Type', 'application/json')
                               .set('withCredentials', 'true')


        // setHeaders: {
          //   Authorization: `Bearer ${token}`,
          //   Content-Type: 'application/json',
          //   Accept: 'application/json'
          // }
          
        

                    // .set('Access-Control-Allow-Origin', '*')
                    // .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
                    // .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')

      // 'Accept': 'application/json, text/plain, */*',
      // 'Access-Encoding': 'gzip, deflate',       
      // 'Access-Control-Allow-Origin': '*',       
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',       
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        });

        // console.log("Bearer Token : ", req);
        return next.handle(req);
    }
    else {
      return next.handle(req);
    }
  }
}

