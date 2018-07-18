import { Injectable } from '@angular/core';
import { User } from '../../model/user';


@Injectable()
export class LoginService {
  private isAuth = false;
  constructor() { }

  public login(firstName: string): User {
    this.isAuth = true;
    const storedUser = {
      Id: 1,
      FirstName: firstName,
      LastName: ''
    };

    window.localStorage.setItem('loginUser', JSON.stringify(storedUser));
    return storedUser;
  }

  public logout() {
    this.isAuth = false;
    window.localStorage.removeItem('loginUser');
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
  }

  public getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('loginUser'));
  }
}
