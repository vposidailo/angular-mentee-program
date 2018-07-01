import { Component, OnInit, Output } from '@angular/core';
import { VideoCourseItem } from '../../model/video-course-item';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';


@Component({
  selector: 'app-video-courses-list-component',
  templateUrl: './video-courses-list-component.component.html',
  styleUrls: ['./video-courses-list-component.component.css']
})
export class VideoCoursesListComponentComponent implements OnInit {
  public videoCourses: VideoCourseItem[] = [];
  private videoCourceIndex: number = 1;
  public loadMoreVisible: string = "visible";

  constructor(private videoCoursesService: VideoCoursesServiceService) { }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
  }

  loadMore = function(){
    this.videoCourceIndex++;

    if(this.videoCoursesService.checkIfSourceHaveMoreElements(this.videoCourceIndex)){
      this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
      console.log("Load more");
      return;
    }
    
    this.loadMoreVisible = "hidden";
  }

  deleteVideoCourseItem = function(event): string {
    var deleteVideoCourceItemMessage = "Delete: item parent call " + event;
    console.log(deleteVideoCourceItemMessage);
    return deleteVideoCourceItemMessage;
  }
}
