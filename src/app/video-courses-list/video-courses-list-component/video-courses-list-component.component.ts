import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';
import { VideoCourseItem } from '../../_shared/model/video-course-item';
import { SearchByNamePipe } from '../../_shared/pipes/search-by-name.pipe';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchService } from '../../_shared/services/search_service/search.service';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-video-courses-list-component',
  templateUrl: './video-courses-list-component.component.html',
  styleUrls: ['./video-courses-list-component.component.css']
})
export class VideoCoursesListComponentComponent implements OnInit, OnDestroy {
  private videoCourseSubscriber: Subscription;
  private videoCourseDeleteSubscriber: Subscription;
  private videoCourseSearchServiceSubscriber: Subscription;
  public videoCourses: VideoCourseItem[] = [];
  private videoCourceDefaultCount = 5;
  private videoCourcePage = 1;
  public loadMoreVisible = 'visible';
  private searchText = '';

  public breadcrumb = '';

  private id: number;
  private subscription: Subscription;

  constructor(private videoCoursesService: VideoCoursesServiceService,
              private searchByNamePipe: SearchByNamePipe,
              private searchService: SearchService) { }

  @Input()
  set searchVideoCource(searchVideoCource: string) {
     this.videoCourses = this.searchByNamePipe.transform(this.videoCoursesService.getAllVideoCourses(), searchVideoCource);
  }

  ngOnInit() {
    this.breadcrumb = 'Courses';
    this.videoCourseSearchServiceSubscriber = this.searchService.searchFilterMessage
                                                  .subscribe((searchText: string) => {
                                                                                        this.searchText = searchText;
                                                                                        this.init();
                                                                                      });
    this.init();
  }

  init() {
    this.videoCourseSubscriber = this.videoCoursesService
                                      .getVideoCourses(this.videoCourcePage, this.videoCourceDefaultCount, this.searchText)
                                      .subscribe(
                                        (res: VideoCourseItem[]) => {
                                          this.videoCourses = res['courses'];
                                          this.loadMoreVisible = res['canLoadMore'] ? 'visible' : 'hidden';
                                        },
                                        (error: HttpErrorResponse) => console.log(error)
                                      );
  }

  ngOnDestroy() {
    this.videoCourseSubscriber.unsubscribe();
    if (this.videoCourseDeleteSubscriber) {
      this.videoCourseDeleteSubscriber.unsubscribe();
    }
  }

  loadMore() {
    this.videoCourcePage++;
    this.init();
  }

  deleteVideoCourseItem(event): string {
    const result = window.confirm('Do you really want to delete this course?');
    if (result) {
      this.videoCourseDeleteSubscriber = this.videoCoursesService.removeVideoCourseItem(event).subscribe((res: number) => {
        if (res['courses'] !== -1) {
          this.init();
        }
      });

      return 'Delete: item parent call ' + event.id;
    }
  }
}
