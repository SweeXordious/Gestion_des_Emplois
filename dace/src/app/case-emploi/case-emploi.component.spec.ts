import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseEmploiComponent } from './case-emploi.component';

describe('CaseEmploiComponent', () => {
  let component: CaseEmploiComponent;
  let fixture: ComponentFixture<CaseEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
