import { Component } from '@angular/core';
import { LoginService } from './_shared/services/login_service/login.service';
import { User } from './_shared/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = '';

  constructor(private userService: LoginService) { }

  get checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }

  filterVideoCource (searchText: string) {
    this.searchText = searchText;
  }
}
