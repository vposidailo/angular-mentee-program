import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: Partial<LoginService>;

  beforeEach(async(() => {
    // tslint:disable-next-line:max-line-length
    loginService = { getUserInfo: jasmine.createSpy('getUserInfo').and.returnValue({Id: 1, FirstName: 'Vitalii', LastName: 'Posidailo' }), isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(false)};
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [{ provide: LoginService, useValue: loginService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call user service load user', () => {
    component.ngOnInit();
    expect(loginService.getUserInfo).toHaveBeenCalled();
  });
});
