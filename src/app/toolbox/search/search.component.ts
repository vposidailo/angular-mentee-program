import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;
  @Output() public searchTextOutput: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { 
    this.searchText = "";
  }

  ngOnInit() {
  }

  searchVideoCource = function(){
    this.searchTextOutput.emit(this.searchText);
  }
}
