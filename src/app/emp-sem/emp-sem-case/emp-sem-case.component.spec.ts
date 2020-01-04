import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSemCaseComponent } from './emp-sem-case.component';

describe('EmpSemCaseComponent', () => {
  let component: EmpSemCaseComponent;
  let fixture: ComponentFixture<EmpSemCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSemCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSemCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
