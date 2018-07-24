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
  private videoCourceIndex = 4;
  public loadMoreVisible = 'visible';

  constructor(private videoCoursesService: VideoCoursesServiceService, private searchByNamePipe: SearchByNamePipe) { }

  @Input()
  set searchVideoCource(searchVideoCource: string) {
     this.videoCourses = this.searchByNamePipe.transform(this.videoCoursesService.getAllVideoCourses(), searchVideoCource);
  }

  ngOnInit() {
    this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
  }

  loadMore() {
    this.videoCourceIndex += 3;

    if (!this.videoCoursesService.checkIfSourceHaveMoreElements(this.videoCourceIndex)) {
      this.loadMoreVisible = 'hidden';
    }

    this.videoCourses = this.videoCoursesService.getVideoCourses(this.videoCourceIndex);
  }

  deleteVideoCourseItem(event): string {
    const result = window.confirm('Do you really want to delete this course?');
    if (result) {
      this.videoCourses = this.videoCoursesService.removeVideoCourseItem(event);
      return 'Delete: item parent call ' + event;
    }
  }
}
