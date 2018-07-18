import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  username = '';
  password = '';
  constructor(private userService: LoginService) { }

  ngOnInit() {
  }

  loginClick() {
    this.userService.login('Vitalii');
  }

}
