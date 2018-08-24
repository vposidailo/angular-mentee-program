import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { VideoCoursesListModule } from './video-courses-list/video-courses-list.module';
import { VideoCoursesServiceService } from './_shared/services/video_courses_service/video-courses-service.service';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './_shared/routes/app.routes';
import { AuthGuard } from './_shared/guards/auth-guard.guard';
import { IsAuthGuard } from './_shared/guards/is-auth.guard';
import { IsNotAuthGuard } from './_shared/guards/is-not-auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_shared/interceptors/token-interceptor';
import { LoaderInterceptor } from './_shared/interceptors/loader-Interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    VideoCoursesListModule,
    LoginModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
  ],
  providers: [
    VideoCoursesServiceService,
    AuthGuard,
    IsAuthGuard,
    IsNotAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
