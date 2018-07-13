import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCourceAddNewComponent } from './video-cource-add-new/video-cource-add-new.component';
import { VideoCoursesListComponentComponent } from './video-courses-list-component/video-courses-list-component.component';
import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component/video-courses-list-item-component.component';
import { CreationDateDirective } from '../_shared/derectives/creation-date.directive';
import { VideoCourceOrderPipe } from '../_shared/pipes/video-cource-order.pipe';
import { DurationPipe } from '../_shared/pipes/duration.pipe';
import { SearchByNamePipe } from '../_shared/pipes/search-by-name.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SearchByNamePipe
  ],
  declarations: [
    VideoCoursesListComponentComponent,
    VideoCoursesListItemComponentComponent,
    VideoCourceAddNewComponent,
    CreationDateDirective,
    VideoCourceOrderPipe,
    DurationPipe
  ],
  exports: [
    VideoCoursesListComponentComponent,
    VideoCoursesListItemComponentComponent,
    VideoCourceAddNewComponent
  ]
})
export class VideoCoursesListModule { }
