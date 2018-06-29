import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCourceAddNewComponent } from './video-cource-add-new/video-cource-add-new.component';
import { VideoCoursesListComponentComponent } from './video-courses-list-component/video-courses-list-component.component';
import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component/video-courses-list-item-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent, VideoCourceAddNewComponent],
  exports:[VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent, VideoCourceAddNewComponent]
})
export class VideoCoursesListModule { }
