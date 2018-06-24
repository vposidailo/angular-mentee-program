import { Component, OnInit } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';


@Component({
  selector: 'app-video-courses-list-component',
  templateUrl: './video-courses-list-component.component.html',
  styleUrls: ['./video-courses-list-component.component.css']
})
export class VideoCoursesListComponentComponent implements OnInit {
  public videoCourses: VideoCourseItem[] = [];
  constructor(private videoCoursesService: VideoCoursesServiceService) { }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCourses();
  }

  loadMore = function(){
    console.log("Load more");
  }
}
