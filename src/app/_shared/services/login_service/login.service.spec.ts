import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AuthGuard } from '../../guards/auth-guard.guard';
import { IsAuthGuard } from '../../guards/is-auth.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [LoginService, AuthGuard, IsAuthGuard, HttpClient]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
