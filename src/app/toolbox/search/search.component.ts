import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from '../../_shared/services/search_service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchText = '';
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  searchVideoCource(event) {
    this.searchService.changeSearchFilter(event);
  }
}
