import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit, OnDestroy {
  private loginUserSubscriber: Subscription;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });



  constructor(private userService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginUserSubscriber.unsubscribe();
  }

  loginClick() {
    this.loginUserSubscriber = this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe((res: any) => {
        if (res['isAuthenticated'] === true) {
          this.userService.setAuthenticatedUser(res['userToken']);
          this.router.navigateByUrl('courses');
        }
      });
  }
}
