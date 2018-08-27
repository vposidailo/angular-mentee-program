import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../_shared/services/search_service/search.service';
import { filter, debounceTime } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    searchtext: new FormControl()
  });

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchForm.get('searchtext').valueChanges
    .pipe(
      debounceTime(1000),
      filter((searchInput: string) => searchInput.length / 3 >= 1 || searchInput.length === 0))
    .subscribe((searchInput: string) => {
      this.searchService.changeSearchFilter(searchInput);
    });
  }
}
