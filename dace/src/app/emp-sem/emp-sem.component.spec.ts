import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSemComponent } from './emp-sem.component';

describe('EmpSemComponent', () => {
  let component: EmpSemComponent;
  let fixture: ComponentFixture<EmpSemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
