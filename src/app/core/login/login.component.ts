import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
