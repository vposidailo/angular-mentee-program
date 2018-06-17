import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCoursesListItemComponentComponent } from './video-courses-list-item-component.component';

describe('VideoCoursesListItemComponentComponent', () => {
  let component: VideoCoursesListItemComponentComponent;
  let fixture: ComponentFixture<VideoCoursesListItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCoursesListItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
