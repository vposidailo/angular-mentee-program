import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public author = '';
  @Output() public authorOutput: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  authorChanged() {
    this.authorOutput.emit(this.author);
  }
}
