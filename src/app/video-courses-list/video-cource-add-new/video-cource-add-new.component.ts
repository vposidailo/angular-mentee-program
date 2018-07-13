import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-cource-add-new',
  templateUrl: './video-cource-add-new.component.html',
  styleUrls: ['./video-cource-add-new.component.css']
})
export class VideoCourceAddNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNewVideoCourseItem(addNewButtonMessage: string): string {
    return addNewButtonMessage;
  }
}
