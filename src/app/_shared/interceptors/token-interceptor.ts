import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login_service/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public loginService: LoginService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('loginUser')) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.loginService.getUserToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
