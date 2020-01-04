import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEmploiCpfComponent } from './case-emploi-cpf.component';

describe('CaseEmploiCpfComponent', () => {
  let component: CaseEmploiCpfComponent;
  let fixture: ComponentFixture<CaseEmploiCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseEmploiCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEmploiCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
