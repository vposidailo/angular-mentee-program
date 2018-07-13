import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../_shared/services/login_service/login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoginService
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
