import { Component } from '@angular/core';
import { LoginService } from './_shared/services/login_service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  addNewItemPage = false;

  constructor(private userService: LoginService) {
  }

  // get checkIfUserLogin(): boolean {
  //   return this.userService.isAuthenticated();
  // }

  newVideoCourseItemAction(event) {
    this.addNewItemPage = event;
  }
}
