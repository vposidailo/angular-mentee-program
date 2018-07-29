import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseAddNewComponent } from './video-course-add-new.component';
import { By } from '@angular/platform-browser';

describe('VideoCourseAddNewComponent', () => {
  let component: VideoCourseAddNewComponent;
  let fixture: ComponentFixture<VideoCourseAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCourseAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourseAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud click add new video cource button', () => {
    const addNewButton = fixture.debugElement.query(By.css('.btn'));
    addNewButton.triggerEventHandler('click', null);

    expect('Add new button click').toBeTruthy();
  });
});
