import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;

  constructor() { 
    this.searchText = "";
  }

  ngOnInit() {
  }

  searchVideoCource = function(){
    console.log("Click search with text: " + this.searchText);
  }
}
