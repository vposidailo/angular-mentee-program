import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginformComponent } from '../../login/loginform/loginform.component';
import { LoginService } from '../services/login_service/login.service';

@Injectable()
export class AuthGuard implements CanDeactivate<LoginformComponent> {

  constructor(private userService: LoginService) {}

  canDeactivate(
    component: LoginformComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.userService.isAuthenticated();
  }
}
