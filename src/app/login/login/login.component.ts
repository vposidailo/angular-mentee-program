import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { User } from '../../_shared/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = null;

  constructor(private userService: LoginService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
