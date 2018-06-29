import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListComponentComponent } from './video-courses-list-component.component';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';

describe('VideoCoursesListComponentComponent', () => {
  let component: VideoCoursesListComponentComponent;
  let fixture: ComponentFixture<VideoCoursesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCoursesListComponentComponent ],
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
});
