import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.guard';
import { LoginService } from '../services/login_service/login.service';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, LoginService]
    });
  });

  it('should ...1', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
