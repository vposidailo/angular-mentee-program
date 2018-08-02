import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { User } from '../../_shared/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user =  this.userService.getUserInfo();
  }

  get checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }

  logoff() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }
}
