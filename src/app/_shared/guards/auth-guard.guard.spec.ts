import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.guard';
import { LoginService } from '../services/login_service/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [AuthGuard, LoginService]
    });
  });

  it('should ...1', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
