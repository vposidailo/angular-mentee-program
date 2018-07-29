import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-course-add-new',
  templateUrl: './video-course-add-new.component.html',
  styleUrls: ['./video-course-add-new.component.css']
})
export class VideoCourseAddNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNewVideoCourseItem(addNewButtonMessage: string): string {
    return addNewButtonMessage;
  }
}
