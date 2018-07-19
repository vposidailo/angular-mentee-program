import { Component } from '@angular/core';
import { LoginService } from './_shared/services/login_service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = '';

  constructor(private userService: LoginService) { }

  filterVideoCource (searchText: string) {
    this.searchText = searchText;
  }

  checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }
}
