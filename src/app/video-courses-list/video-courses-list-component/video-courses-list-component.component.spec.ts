import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListComponentComponent } from './video-courses-list-component.component';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';
import { VideoCoursesListItemComponentComponent } from '../video-courses-list-item-component/video-courses-list-item-component.component';
import { VideoCourceOrderPipe } from '../../_shared/pipes/video-cource-order.pipe';
import { CreationDateDirective } from '../../_shared/derectives/creation-date.directive';
import { DurationPipe } from '../../_shared/pipes/duration.pipe';
import { SearchByNamePipe } from '../../_shared/pipes/search-by-name.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbsComponent } from '../../core/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from '../../toolbox/search/search.component';
import { VideoCourseAddNewComponent } from '../video-course-add-new/video-course-add-new.component';
import { FormsModule } from '@angular/forms';

describe('VideoCoursesListComponentComponent', () => {
  let component: VideoCoursesListComponentComponent;
  let fixture: ComponentFixture<VideoCoursesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        VideoCoursesListComponentComponent,
        VideoCoursesListItemComponentComponent,
        VideoCourseAddNewComponent,
        VideoCourceOrderPipe,
        CreationDateDirective,
        DurationPipe,
        BreadcrumbsComponent,
        SearchComponent
      ],
      providers: [ VideoCoursesServiceService, SearchByNamePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete item component', () => {
    const actualValue = component.deleteVideoCourseItem('test');
    const expectedValue = 'Delete: item parent call test';
    expect(expectedValue).toEqual(actualValue);
  });
});
