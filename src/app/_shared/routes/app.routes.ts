import { Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { VideoCoursesListComponentComponent } from '../../video-courses-list/video-courses-list-component/video-courses-list-component.component';
import { NoContentComponent } from '../../core/no_content/no-content.component';
import { VideoCourseAddNewItemComponent } from '../../video-courses-list/video-course-add-new-item/video-course-add-new-item.component';
import { LoginformComponent } from '../../login/loginform/loginform.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},

    { path: 'login', component: LoginformComponent},

    { path: 'courses', component: VideoCoursesListComponentComponent },
    { path: 'courses/:id', component: VideoCoursesListComponentComponent },
    { path: 'courses/new', component: VideoCourseAddNewItemComponent},

    { path: '**', component: NoContentComponent}
];
