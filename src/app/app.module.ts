import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { VideoCoursesListModule } from './video-courses-list/video-courses-list.module';
import { ToolboxModule } from './toolbox/toolbox.module';
import { VideoCoursesServiceService } from './_shared/services/video_courses_service/video-courses-service.service';
import { SearchByNamePipe } from './_shared/pipes/search-by-name.pipe';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './_shared/routes/app.routes';
import { AuthGuard } from './_shared/guards/auth-guard.guard';
import { IsAuthGuard } from './_shared/guards/is-auth.guard';
import { IsNotAuthGuard } from './_shared/guards/is-not-auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    VideoCoursesListModule,
    LoginModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    VideoCoursesServiceService,
    AuthGuard,
    IsAuthGuard,
    IsNotAuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
