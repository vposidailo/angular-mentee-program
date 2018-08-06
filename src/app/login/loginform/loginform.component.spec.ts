import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginformComponent } from './loginform.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../_shared/services/login_service/login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginformComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [ LoginService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
