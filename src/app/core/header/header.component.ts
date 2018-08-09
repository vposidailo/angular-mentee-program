import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { User } from '../../_shared/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: LoginService) { }

  ngOnInit() {
  }

  get userLogin(): User {
    if (this.userService.isAuthenticated() === true) {
      return this.userService.getUserInfo();
    }
  }

  get checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }
}
