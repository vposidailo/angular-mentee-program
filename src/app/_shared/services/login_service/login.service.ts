import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_SERVICE_URL = 'http://localhost:3004';
const USER_INFO = 'userInfo';
const LOGIN_USER = 'loginUser';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
                    .set('email', email)
                    .set('password', password);

    return this.http.post<any>(`${USER_SERVICE_URL}/${LOGIN_USER}`, params);
  }

  public setAuthenticatedUser(userToken: string) {
    window.localStorage.setItem('IsAuthenticated', JSON.stringify(true));
    window.localStorage.setItem('userToken', JSON.stringify(userToken));
  }

  public logout() {
    window.localStorage.removeItem('IsAuthenticated');
    window.localStorage.removeItem('userToken');
  }

  public isAuthenticated(): boolean {
    return JSON.parse(window.localStorage.getItem('IsAuthenticated'));
  }

  public getUserInfo(): Observable<User> {
    if (this.isAuthenticated()) {

      const params = new HttpParams()
                        .set('userToken', JSON.parse(window.localStorage.getItem('userToken')));

      return this.http.get<User>(`${USER_SERVICE_URL}/${USER_INFO}`, { params });
    }
  }
}
