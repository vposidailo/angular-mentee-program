import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourceAddNewComponent } from './video-cource-add-new.component';

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
});
