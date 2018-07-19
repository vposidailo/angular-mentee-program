import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { VideoCoursesListModule } from './video-courses-list/video-courses-list.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { VideoCoursesServiceService } from './_shared/services/video_courses_service/video-courses-service.service';
import { SearchByNamePipe } from './_shared/pipes/search-by-name.pipe';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    CoreModule,
    VideoCoursesListModule,
    ToolboxModule,
    LoginModule
  ],
  providers: [
    VideoCoursesServiceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
