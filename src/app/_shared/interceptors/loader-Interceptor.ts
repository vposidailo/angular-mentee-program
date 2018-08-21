import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../services/loader_service/loader.service';
import { tap } from 'rxjs/operators';
import { timer } from '../../../../node_modules/rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.activateloader(true);
    setTimeout(() => {
      this.loaderService.activateloader(false);
    }, 1000);
    return next.handle(request).pipe(
      tap(event => {
        // this.loaderService.activateloader(false);
      }));
  }
}
