import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AuthGuard } from '../../guards/auth-guard.guard';
import { IsAuthGuard } from '../../guards/is-auth.guard';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, AuthGuard, IsAuthGuard, ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
