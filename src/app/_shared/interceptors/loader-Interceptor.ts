import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from '../services/loader_service/loader.service';
import { tap, delay, map } from 'rxjs/operators';
import { pipe, from } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.activateloader(true);
    return next.handle(request).pipe(
        tap(() => this.loaderService.activateloader(false)),
    );
  }
}
