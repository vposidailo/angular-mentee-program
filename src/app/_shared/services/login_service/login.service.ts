import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_SERVICE_URL = 'http://localhost:3000/users';

@Injectable()
export class LoginService {
  private isAuth = false;
  private loginedUser = <User> { };
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): User {
    const userCredential = this.getUserCredential();
    // debugger;
    // if (userCredential.Email === email
    //   && userCredential.Password === password) {
      this.isAuth = true;

      this.loginedUser.Id = 1;
      this.loginedUser.Email = email;
      this.loginedUser.FirstName = 'Vitalii';
      this.loginedUser.LastName = 'Posidailo';
    // }

    window.localStorage.setItem('loginUser', JSON.stringify(this.loginedUser));
    return this.loginedUser;
  }

  public logout() {
    this.isAuth = false;
    window.localStorage.removeItem('loginUser');
  }

  public isAuthenticated(): boolean {
    return this.isAuth;
  }

  public getUserInfo(): User {
    if (this.isAuth === true) {
      return JSON.parse(window.localStorage.getItem('loginUser'));
    } else {
      return {Id: 0, Email: '', FirstName: '', LastName: ''};
    }

  }

  public getUserCredential(): Observable<any> {
    return this.http.get<any>(`${USER_SERVICE_URL}`);
    // return JSON.parse(window.localStorage.getItem('userCredential'));
  }
}
