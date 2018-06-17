import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoginService],
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LoginComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class CoreModule { }
