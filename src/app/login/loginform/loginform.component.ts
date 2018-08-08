import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit, OnDestroy {
  private loginUserSubscriber: Subscription;
  public username = '';
  public password = '';

  constructor(private userService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginUserSubscriber.unsubscribe();
  }

  loginClick() {
    this.loginUserSubscriber = this.userService.login(this.username, this.password).subscribe((res: any) => {
      if (res['isAuthenticated'] === true) {
        this.userService.setAuthenticatedUser(res['userInfo']);
        this.router.navigateByUrl('courses');
      }
    });
  }
}
