import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const USER_SERVICE_URL = 'http://localhost:3004/user';

@Injectable()
export class LoginService {
  private isAuth = false;
  private loginedUser = <User> { };
  constructor(private http: HttpClient) { }

  public login(email: string, password: string): User {
    // tslint:disable-next-line:max-line-length
    // this.userAuthentification(email, password).subscribe((res: User) => {
    //   this.loginedUser = res;
    //   this.isAuth = true;
    //   window.localStorage.setItem('loginUser', JSON.stringify(this.loginedUser));
    //   return this.loginedUser;
    // },
    //   (error: HttpErrorResponse) => console.log(error)
    // );

    this.isAuth = true;
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

  private userAuthentification(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${USER_SERVICE_URL}`, {params: {email, password}});
  }
}
