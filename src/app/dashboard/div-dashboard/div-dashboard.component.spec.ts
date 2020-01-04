import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDashboardComponent } from './div-dashboard.component';

describe('DivDashboardComponent', () => {
  let component: DivDashboardComponent;
  let fixture: ComponentFixture<DivDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
