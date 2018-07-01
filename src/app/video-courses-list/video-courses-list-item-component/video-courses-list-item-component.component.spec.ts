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
    component.VCItem = { 
      id: 1,
      Title: "Practical LINQ",
      Description: "This course covers practical uses of Language Integrated Query (LINQ). With LINQ, you can search, sort, create, compare and analyze your data. And you can use LINQ to manipulate and shape your data for display in a user interface. With its common syntax, strong typing, Intellisense support, and transformational features, like the internet, you'll wonder how you ever coded without it. Enjoy!",
      Duration: 212,
      Creationdate: new Date(2013, 8, 17)};
    fixture.detectChanges();
  });

  it('should asdasdasd create', () => {
    expect(component).toBeTruthy();
  });
});
