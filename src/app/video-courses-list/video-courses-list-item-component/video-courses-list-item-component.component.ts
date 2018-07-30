import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoCourseItem } from '../../_shared/model/video-course-item';
import { DurationPipe } from '../../_shared/pipes/duration.pipe';

@Component({
  selector: 'app-video-courses-list-item-component',
  templateUrl: './video-courses-list-item-component.component.html',
  styleUrls: ['./video-courses-list-item-component.component.css']
})
export class VideoCoursesListItemComponentComponent implements OnInit {
  @Input() public VCItem: VideoCourseItem;
  @Output() deleteItem: EventEmitter<VideoCourseItem> = new EventEmitter<VideoCourseItem>();

  constructor() { }

  ngOnInit() {
  }

  deleteVideoCourseItem() {
    this.deleteItem.emit(this.VCItem);
  }
}
