import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchSource = new BehaviorSubject('');
  public searchFilterMessage = this.searchSource.asObservable().pipe(
                                                                  debounceTime(1000),
                                                                  filter((val: string) => val.length / 3 >= 1 || val.length === 0));

  constructor() { }

  changeSearchFilter(searchText: string) {
    this.searchSource.next(searchText);
  }
}
