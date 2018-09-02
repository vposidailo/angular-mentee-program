import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCourseAddNewComponent } from './video-course-add-new/video-course-add-new.component';
import { VideoCoursesListComponentComponent } from './video-courses-list-component/video-courses-list-component.component';
import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component/video-courses-list-item-component.component';
import { CreationDateDirective } from '../_shared/directives/creation-date.directive';
import { VideoCourceOrderPipe } from '../_shared/pipes/video-cource-order.pipe';
import { DurationPipe } from '../_shared/pipes/duration.pipe';
import { SearchByNamePipe } from '../_shared/pipes/search-by-name.pipe';
import { VideoCourseAddNewItemComponent } from './video-course-add-new-item/video-course-add-new-item.component';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PipesModule } from '../_shared/pipes/pipes.module';
import { ToolboxModule } from '../toolbox/toolbox.module';
import { DateValidatorDirective } from '../_shared/directives/validators/date-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    PipesModule,
    ToolboxModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchByNamePipe,
    DurationPipe
  ],
  declarations: [
    VideoCoursesListComponentComponent,
    VideoCoursesListItemComponentComponent,
    VideoCourseAddNewComponent,
    VideoCourseAddNewItemComponent,
    CreationDateDirective,
    VideoCourceOrderPipe,
    SearchByNamePipe,
    DateValidatorDirective
  ],
  exports: [
    VideoCoursesListComponentComponent,
    VideoCoursesListItemComponentComponent,
    VideoCourseAddNewComponent,
    VideoCourseAddNewItemComponent
  ]
})
export class VideoCoursesListModule { }
