import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from '../login/login.module';
import { LoginService } from '../_shared/services/login_service/login.service';
import { DateTimePickerComponent } from './controls/date-time-picker/date-time-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationComponent } from './controls/duration/duration.component';
import { DurationPipe } from '../_shared/pipes/duration.pipe';
import { PipesModule } from '../_shared/pipes/pipes.module';
import { AuthorComponent } from './controls/author/author.component';
import { NoContentComponent } from './no_content/no-content.component';
import { TagInputModule } from '../../../node_modules/ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    DurationPipe
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DateTimePickerComponent,
    DurationComponent,
    AuthorComponent,
    NoContentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DateTimePickerComponent,
    DurationComponent,
    AuthorComponent
  ]
})
export class CoreModule { }
