import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDispoComponent } from './all-dispo.component';

describe('AllDispoComponent', () => {
  let component: AllDispoComponent;
  let fixture: ComponentFixture<AllDispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
