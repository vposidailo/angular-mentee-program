import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoCourseItem } from '../../_shared/model/video-course-item';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';

@Component({
  selector: 'app-video-course-add-new-item',
  templateUrl: './video-course-add-new-item.component.html',
  styleUrls: ['./video-course-add-new-item.component.css']
})
export class VideoCourseAddNewItemComponent implements OnInit {
  private subscription: Subscription;
  private videoCourceId = 0;
  public videoCourseTitle = '';
  public videoCourseDescription = '';
  public videoCourseReleaseDate = '';
  public videoCourseDuration = 0;
  public videoCourseAuthors = '';

  public breadcrumb = '';

  @Output() public newVideoCourseItem: EventEmitter<VideoCourseItem> = new EventEmitter<VideoCourseItem>();
  constructor(private router: Router, private activateRoute: ActivatedRoute, private videoCourceService: VideoCoursesServiceService) { }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(data => this.videoCourceId = Number(data['id']));
    this.breadcrumb = 'Course/New Video Course Item';

    if (!isNaN(this.videoCourceId) && this.videoCourceId !== 0) {
      const currentVideoCourse = this.videoCourceService.getVideoCoursesById(this.videoCourceId);
      this.videoCourseTitle = currentVideoCourse.Title;
      this.videoCourseDescription = currentVideoCourse.Description;
      this.videoCourseReleaseDate = currentVideoCourse.Creationdate.toLocaleDateString('en-GB');
      this.videoCourseDuration = currentVideoCourse.Duration;

      this.breadcrumb = 'Course/' + this.videoCourseTitle;
    }
  }

  newItemVideoCourse() {
    const videoCourceItem = {
      id: this.videoCourceId,
      Title: this.videoCourseTitle,
      Description: this.videoCourseDescription,
      Duration: this.videoCourseDuration,
      Creationdate: new Date(this.videoCourseReleaseDate.split('/').reverse().join('/')),
      IsTopRated: false
    };

    if (isNaN(videoCourceItem.id)) {
      this.videoCourceService.createVideoCourseItem(videoCourceItem);
    } else {
      this.videoCourceService.updateVideoCourceItem(videoCourceItem);
    }

    this.router.navigateByUrl('courses');
  }

  rejectNewItemVideoCourse() {
    this.router.navigateByUrl('courses');
  }

  releaseDateChanged(event) {
    this.videoCourseReleaseDate = event;
  }

  durationChanged(event) {
    this.videoCourseDuration = event;
  }

  authorChanged(event) {
    this.videoCourseAuthors = event;
  }

}
