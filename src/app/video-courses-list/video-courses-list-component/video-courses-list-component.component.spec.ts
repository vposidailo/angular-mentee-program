import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListComponentComponent } from './video-courses-list-component.component';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';
import { VideoCoursesListItemComponentComponent } from '../video-courses-list-item-component/video-courses-list-item-component.component';

describe('VideoCoursesListComponentComponent', () => {
  let component: VideoCoursesListComponentComponent;
  let fixture: ComponentFixture<VideoCoursesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCoursesListComponentComponent, VideoCoursesListItemComponentComponent],
      providers: [VideoCoursesServiceService]
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
    var actualValue = component.deleteVideoCourseItem("test");
    var expectedValue = "Delete: item parent call test";
    expect(expectedValue).toEqual(actualValue);
  });
});
