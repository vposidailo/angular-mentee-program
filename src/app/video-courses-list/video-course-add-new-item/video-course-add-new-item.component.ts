import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { VideoCourseItem } from '../../_shared/model/video-course-item';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-course-add-new-item',
  templateUrl: './video-course-add-new-item.component.html',
  styleUrls: ['./video-course-add-new-item.component.css']
})
export class VideoCourseAddNewItemComponent implements OnInit, OnDestroy {

  addUpdateVideoCourseItem = new FormGroup({
    videoCourseTitle: new FormControl('', [Validators.maxLength(50), Validators.required]),
    videoCourseDescription: new FormControl('', [Validators.maxLength(500), Validators.required]),
    videoCourseReleaseDate: new FormControl('', [Validators.required]),
    videoCourseDuration: new FormControl('', [Validators.required])
  });

  public subscription: Subscription;
  private videoCourceCreatNewItemUpdateSubscription: Subscription;
  private videoCourceGetItemSubscription: Subscription;
  private videoCourceId = 0;
  public videoCourseAuthors = '';

  public breadcrumb = '';

  @Output() public newVideoCourseItem: EventEmitter<VideoCourseItem> = new EventEmitter<VideoCourseItem>();
  constructor(private router: Router, private activateRoute: ActivatedRoute, private videoCourceService: VideoCoursesServiceService) { }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(data => {
      this.videoCourceId = Number(data['id']);
      this.breadcrumb = 'Course/New Video Course Item';
      if (!isNaN(this.videoCourceId) && this.videoCourceId !== 0) {
        this.videoCourceGetItemSubscription = this.videoCourceService
                          .getVideoCoursesById(this.videoCourceId)
                          .subscribe((res: VideoCourseItem) => {
                              const currentVideoCourse = res['course'];
                              this.addUpdateVideoCourseItem.controls['videoCourseTitle'].setValue(currentVideoCourse.Title);
                              this.addUpdateVideoCourseItem.controls['videoCourseDescription'].setValue(currentVideoCourse.Description);
                              // tslint:disable-next-line:max-line-length
                              this.addUpdateVideoCourseItem.controls['videoCourseReleaseDate'].setValue(new Date(currentVideoCourse.Creationdate).toLocaleDateString('en-GB'));
                              this.addUpdateVideoCourseItem.controls['videoCourseDuration'].setValue(currentVideoCourse.Duration);
                              this.breadcrumb = 'Course/' + this.addUpdateVideoCourseItem.controls['videoCourseTitle'].value;
                          });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    if (this.videoCourceCreatNewItemUpdateSubscription) {
      this.videoCourceCreatNewItemUpdateSubscription.unsubscribe();
    }

    if (this.videoCourceGetItemSubscription) {
      this.videoCourceGetItemSubscription.unsubscribe();
    }
  }

  newItemVideoCourse() {
    const videoCourceItem = {
      Id: this.videoCourceId,
      Title: this.addUpdateVideoCourseItem.controls['videoCourseTitle'].value,
      Description: this.addUpdateVideoCourseItem.controls['videoCourseDescription'].value,
      Duration: this.addUpdateVideoCourseItem.controls['videoCourseDuration'].value,
      Creationdate: this.addUpdateVideoCourseItem.controls['videoCourseReleaseDate'].value,
      IsTopRated: false
    };

    // if (isNaN(videoCourceItem.id)) {
    //   this.videoCourceCreatNewItemUpdateSubscription = this.videoCourceService
    //                                             .createVideoCourseItem(videoCourceItem)
    //                                             .subscribe((res: VideoCourseItem[]) => {
    //                                                 this.router.navigateByUrl('courses');
    //                                             });

    // } else {
    //   this.videoCourceCreatNewItemUpdateSubscription = this.videoCourceService
    //                                             .updateVideoCourceItem(videoCourceItem)
    //                                             .subscribe((res: VideoCourseItem[]) => {
    //                                                 this.router.navigateByUrl('courses');
    //                                             });
    // }
  }

  rejectNewItemVideoCourse() {
    debugger;
    // this.router.navigateByUrl('courses');
  }
}
