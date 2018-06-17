import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCoursesListComponentComponent } from './video-courses-list-component/video-courses-list-component.component';
import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component/video-courses-list-item-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent]
})
export class VideoCoursesListModule { }
