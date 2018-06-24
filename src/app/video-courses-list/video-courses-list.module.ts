import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCoursesListComponentComponent } from './video-courses-list-component/video-courses-list-component.component';
import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component/video-courses-list-item-component.component';
import { VideoCoursesServiceService } from '../_shared/services/video_courses_service/video-courses-service.service';
import { VideoCourceAddNewComponent } from './video-cource-add-new/video-cource-add-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [VideoCoursesServiceService],
  declarations: [VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent, VideoCourceAddNewComponent],
  exports:[VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent, VideoCourceAddNewComponent]
})
export class VideoCoursesListModule { }
