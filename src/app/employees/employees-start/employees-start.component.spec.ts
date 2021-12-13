import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesStartComponent } from './employees-start.component';

describe('EmployeesStartComponent', () => {
  let component: EmployeesStartComponent;
  let fixture: ComponentFixture<EmployeesStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
