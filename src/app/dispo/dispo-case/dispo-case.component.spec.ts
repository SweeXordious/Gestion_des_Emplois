import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispoCaseComponent } from './dispo-case.component';

describe('DispoCaseComponent', () => {
  let component: DispoCaseComponent;
  let fixture: ComponentFixture<DispoCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispoCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispoCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
