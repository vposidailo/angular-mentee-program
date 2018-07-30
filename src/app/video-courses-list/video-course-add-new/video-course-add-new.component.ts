import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-course-add-new',
  templateUrl: './video-course-add-new.component.html',
  styleUrls: ['./video-course-add-new.component.css']
})
export class VideoCourseAddNewComponent implements OnInit {
  @Output() public addNewItemOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  addNewVideoCourseItem(addNewButtonMessage: string): string {
    this.addNewItemOutput.emit(true);
    return addNewButtonMessage;
  }
}
