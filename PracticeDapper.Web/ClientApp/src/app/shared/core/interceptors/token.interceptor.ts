import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addAuthToken(request);
    return next.handle(request);
  }


  private addAuthToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      this.router.navigate(["signin"]);
    }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return req;
  }
}
