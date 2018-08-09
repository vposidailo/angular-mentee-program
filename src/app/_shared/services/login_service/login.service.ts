import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_SERVICE_URL = 'http://localhost:3004/user';

@Injectable()
export class LoginService {
  private loginedUser = <User> { };
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<User> {
    const params = new HttpParams()
                    .set('email', email)
                    .set('password', password);

    return this.http.get<User>(`${USER_SERVICE_URL}`, { params });
  }

  public setAuthenticatedUser(user: User) {
    window.localStorage.setItem('IsAuthenticated', JSON.stringify(true));
    window.localStorage.setItem('loginUser', JSON.stringify(user));
  }

  public logout() {
    window.localStorage.removeItem('IsAuthenticated');
    window.localStorage.removeItem('loginUser');
  }

  public isAuthenticated(): boolean {
    return JSON.parse(window.localStorage.getItem('IsAuthenticated'));
  }

  public getUserInfo(): User {
    if (this.isAuthenticated()) {
      return JSON.parse(window.localStorage.getItem('loginUser'));
    }
  }
}
