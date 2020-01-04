import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCtcComponent } from './menu-ctc.component';

describe('MenuCtcComponent', () => {
  let component: MenuCtcComponent;
  let fixture: ComponentFixture<MenuCtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
