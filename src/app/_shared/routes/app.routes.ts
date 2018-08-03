import { Routes } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { VideoCoursesListComponentComponent } from '../../video-courses-list/video-courses-list-component/video-courses-list-component.component';
import { NoContentComponent } from '../../core/no_content/no-content.component';
import { VideoCourseAddNewItemComponent } from '../../video-courses-list/video-course-add-new-item/video-course-add-new-item.component';
import { LoginformComponent } from '../../login/loginform/loginform.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { IsAuthGuard } from '../guards/is-auth.guard';
import { IsNotAuthGuard } from '../guards/is-not-auth.guard';
import { VideoCourseAddNewComponent } from '../../video-courses-list/video-course-add-new/video-course-add-new.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},

    {
        path: 'login',
        component: LoginformComponent,
        canActivate: [ IsNotAuthGuard ],
        canDeactivate: [ AuthGuard ]
    },

    {
        path: 'courses',
        component: VideoCoursesListComponentComponent,
        canActivate: [ IsAuthGuard ]
    },
    {
        path: 'courses/new',
        component: VideoCourseAddNewItemComponent, pathMatch: 'full',
        canActivate: [ IsAuthGuard ]
    },
    // {
    //     path: 'courses/:id',
    //     component: VideoCourseAddNewItemComponent,
    //     children: [
    //         {
    //             path: 'courses/new', component: VideoCourseAddNewItemComponent
    //         }
    //     ]
    //  },
    // { path: 'courses/new', component: VideoCourseAddNewItemComponent },

    { path: '**', component: NoContentComponent}
];
