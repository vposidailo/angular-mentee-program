import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { User } from '../../_shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private userService: LoginService) { }

  ngOnInit() {
    this.userService.getUserInfo();
    this.user = { Id: 1, FirstName: 'Vitalii', LastName: 'Posidailo' };
  }

  logoff() {
    this.userService.logout();
  }

  checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }
}
