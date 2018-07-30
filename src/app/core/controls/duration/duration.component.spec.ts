import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationComponent } from './duration.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../../_shared/pipes/pipes.module';

describe('DurationComponent', () => {
  let component: DurationComponent;
  let fixture: ComponentFixture<DurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationComponent ],
      imports: [ FormsModule, PipesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
