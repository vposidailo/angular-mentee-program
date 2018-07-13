import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourceAddNewComponent } from './video-cource-add-new.component';
import { By } from '@angular/platform-browser';

describe('VideoCourceAddNewComponent', () => {
  let component: VideoCourceAddNewComponent;
  let fixture: ComponentFixture<VideoCourceAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCourceAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourceAddNewComponent);
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
