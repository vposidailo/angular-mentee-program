import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoCourseItem } from '../../_shared/model/video-course-item';

@Component({
  selector: 'app-video-course-add-new-item',
  templateUrl: './video-course-add-new-item.component.html',
  styleUrls: ['./video-course-add-new-item.component.css']
})
export class VideoCourseAddNewItemComponent implements OnInit {
  public videoCourseTitle = '';
  public videoCourseDescription = '';
  public videoCourseReleaseDate = '';
  public videoCourseDuration = 0;
  public videoCourseAuthors = '';

  @Output() public rejectAddingNewVideoCourseItemOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public newVideoCourseItem: EventEmitter<VideoCourseItem> = new EventEmitter<VideoCourseItem>();
  constructor() { }

  ngOnInit() {
  }

  newItemVideoCourse() {
    console.log('add new item');
  }

  rejectNewItemVideoCourse() {
    this.rejectAddingNewVideoCourseItemOutput.emit(false);
    console.log('add new item');
  }

}
