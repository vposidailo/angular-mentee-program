import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthGuard } from './is-auth.guard';
import { LoginService } from '../services/login_service/login.service';
import { HttpClientModule } from '@angular/common/http';

describe('IsAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [IsAuthGuard, LoginService]
    });
  });

  it('should ...', inject([IsAuthGuard], (guard: IsAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
