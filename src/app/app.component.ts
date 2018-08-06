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
  addNewItemPage = false;

  constructor(private userService: LoginService) {
    // const userCredential = {
    //   Email: 'vposidaylo@gmail.com',
    //   Password: '123'
    // };

    // window.localStorage.setItem('userCredential', JSON.stringify(userCredential));
  }

  get checkIfUserLogin(): boolean {
    return this.userService.isAuthenticated();
  }

  filterVideoCource (searchText: string) {
    this.searchText = searchText;
  }

  newVideoCourseItemAction(event) {
    this.addNewItemPage = event;
  }
}
