import { TestBed, async, inject } from '@angular/core/testing';

import { IsNotAuthGuard } from './is-not-auth.guard';
import { LoginService } from '../services/login_service/login.service';

describe('IsNotAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsNotAuthGuard, LoginService]
    });
  });

  it('should ...', inject([IsNotAuthGuard], (guard: IsNotAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
