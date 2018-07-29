import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from '../login/login.module';
import { LoginService } from '../_shared/services/login_service/login.service';
import { DateTimePickerComponent } from './controls/date-time-picker/date-time-picker.component';
import { FormsModule } from '@angular/forms';
import { DurationComponent } from './controls/duration/duration.component';
import { DurationPipe } from '../_shared/pipes/duration.pipe';
import { PipesModule } from '../_shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    FormsModule,
    PipesModule
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
    DurationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DateTimePickerComponent,
    DurationComponent
  ]
})
export class CoreModule { }
