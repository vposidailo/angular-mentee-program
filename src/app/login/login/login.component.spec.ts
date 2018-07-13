import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from '../../_shared/services/login_service/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: Partial<LoginService>;

  beforeEach(async(() => {
    loginService = { getUser: jasmine.createSpy('getUser').and.returnValue({Id: 1, FirstName: 'Vitalii', LastName: 'Posidailo' }) };
    TestBed.configureTestingModule({
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
    expect(loginService.getUser).toHaveBeenCalled();
  });
});
