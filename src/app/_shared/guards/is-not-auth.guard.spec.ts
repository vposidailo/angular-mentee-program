import { TestBed, async, inject } from '@angular/core/testing';

import { IsNotAuthGuard } from './is-not-auth.guard';
import { LoginService } from '../services/login_service/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('IsNotAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [IsNotAuthGuard, LoginService]
    });
  });

  it('should ...', inject([IsNotAuthGuard], (guard: IsNotAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
