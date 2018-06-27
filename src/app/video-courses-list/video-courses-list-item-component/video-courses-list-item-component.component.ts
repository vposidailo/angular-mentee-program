import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';

@Component({
  selector: 'app-video-courses-list-item-component',
  templateUrl: './video-courses-list-item-component.component.html',
  styleUrls: ['./video-courses-list-item-component.component.css']
})
export class VideoCoursesListItemComponentComponent implements OnInit {
  @Input() public VCItem: VideoCourseItem;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteVideoCourseItem = function(){
    console.log("This is a child component");
    this.deleteItem.emit("test");
  }
}
