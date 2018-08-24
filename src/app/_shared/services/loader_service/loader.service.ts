import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSource = new BehaviorSubject<boolean>(false);
  public loaderObservable = this.loaderSource.asObservable();

  constructor() { }

  activateloader(activateLoader: boolean) {
    this.loaderSource.next(activateLoader);
  }
}
