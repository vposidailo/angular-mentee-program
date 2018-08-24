import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../_shared/services/search_service/search.service';
import { filter, debounceTime } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText = '';
  private searchInputSubject = new BehaviorSubject('');
  private searchVideoObservable = this.searchInputSubject.asObservable().pipe(
                                                        debounceTime(1000),
                                                        filter((val: string) => val.length / 3 >= 1 || val.length === 0))
                                                        .subscribe((val: string) => {
                                                          this.searchService.changeSearchFilter(val);
                                                        });
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  searchVideoCource(event) {
    this.searchInputSubject.next(event);
  }
}
