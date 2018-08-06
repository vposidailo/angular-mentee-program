import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { VideoCoursesListModule } from './video-courses-list/video-courses-list.module';
import { VideoCoursesServiceService } from './_shared/services/video_courses_service/video-courses-service.service';
import { LoginModule } from './login/login.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        CoreModule,
        VideoCoursesListModule,
        ToolboxModule,
        LoginModule,
        RouterTestingModule
      ],
      providers: [VideoCoursesServiceService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
