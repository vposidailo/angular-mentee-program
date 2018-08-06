import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseAddNewItemComponent } from './video-course-add-new-item.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoCoursesServiceService } from '../../_shared/services/video_courses_service/video-courses-service.service';

describe('VideoCourseAddNewItemComponent', () => {
  let component: VideoCourseAddNewItemComponent;
  let fixture: ComponentFixture<VideoCourseAddNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCourseAddNewItemComponent ],
      imports: [ FormsModule, CoreModule, RouterTestingModule ],
      providers: [VideoCoursesServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourseAddNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
