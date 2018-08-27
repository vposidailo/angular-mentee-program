import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from '../_shared/services/login_service/login.service';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  declarations: [
    LoginComponent,
    LoginformComponent
  ],
  exports: [
    LoginComponent,
    LoginformComponent
  ]
})
export class LoginModule { }
