import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';
import { LoginService } from '../login.service';

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
