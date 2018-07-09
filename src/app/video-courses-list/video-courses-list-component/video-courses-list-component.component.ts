import { Component, OnInit, Input } from '@angular/core';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';
import { VideoCourseItem } from '../../_shared/model/video-course-item';
import { SearchByNamePipe } from '../../_shared/pipes/search-by-name.pipe';


@Component({
  selector: 'app-video-courses-list-component',
  templateUrl: './video-courses-list-component.component.html',
  styleUrls: ['./video-courses-list-component.component.css']
})
export class VideoCoursesListComponentComponent implements OnInit {
  public videoCourses: VideoCourseItem[] = [];
  private videoCourceIndex: number = 1;
  public loadMoreVisible: string = "visible";

  constructor(private videoCoursesService: VideoCoursesServiceService, private searchByNamePipe: SearchByNamePipe) { }

  @Input()
  set searchVideoCource(searchVideoCource: string) {
     this.videoCourses = this.searchByNamePipe.transform(this.videoCoursesService.getAllVideoCourses(), searchVideoCource);
  }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
  }

  loadMore = function(){
    this.videoCourceIndex++;

    if(this.videoCoursesService.checkIfSourceHaveMoreElements(this.videoCourceIndex)){
      this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
      return;
    }
    
    this.loadMoreVisible = "hidden";
  }

  deleteVideoCourseItem = function(event): string {
    var deleteVideoCourceItemMessage = "Delete: item parent call " + event;
    return deleteVideoCourceItemMessage;
  }
}
