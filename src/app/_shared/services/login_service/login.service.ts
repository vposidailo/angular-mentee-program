import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_SERVICE_URL = 'http://localhost:3004/user';

@Injectable()
export class LoginService {
  private isAuth = false;
  private loginedUser = <User> { };
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<User> {
    const params = new HttpParams()
                    .set('email', email)
                    .set('password', password);

    return this.http.get<User>(`${USER_SERVICE_URL}`, { params });
  }

  public setAuthenticatedUser(user: User) {
    this.isAuth = true;
    window.localStorage.setItem('loginUser', JSON.stringify(user));
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
}
