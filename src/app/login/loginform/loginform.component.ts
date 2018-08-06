import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  username = '';
  password = '';

  constructor(private userService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginClick() {
    this.userService.login(this.username, this.password);
    if (this.userService.isAuthenticated() === true) {
      this.router.navigateByUrl('courses');
    }
  }
}
