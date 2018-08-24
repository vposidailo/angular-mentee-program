import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchSource = new BehaviorSubject('');
  public searchFilterMessage = this.searchSource.asObservable();

  constructor() { }

  changeSearchFilter(searchText: string) {
    this.searchSource.next(searchText);
  }
}
