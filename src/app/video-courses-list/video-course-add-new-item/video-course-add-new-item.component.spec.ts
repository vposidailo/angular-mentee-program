import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseAddNewItemComponent } from './video-course-add-new-item.component';

describe('VideoCourseAddNewItemComponent', () => {
  let component: VideoCourseAddNewItemComponent;
  let fixture: ComponentFixture<VideoCourseAddNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCourseAddNewItemComponent ]
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
