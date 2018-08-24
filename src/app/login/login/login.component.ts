import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { User } from '../../_shared/model/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private userInfoSubscriber: Subscription;
  user: User = <User> {};

  constructor(private userService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.userService.isAuthenticated()) {
      this.userInfoSubscriber =  this.userService.getUserInfo().subscribe((res: User) => {
        this.user = res['userInfo'];
      });
    }
  }

  ngOnDestroy() {
    this.userInfoSubscriber.unsubscribe();
  }

  logoff() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }
}
