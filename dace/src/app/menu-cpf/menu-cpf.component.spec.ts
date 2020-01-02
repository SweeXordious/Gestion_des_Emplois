import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCpfComponent } from './menu-cpf.component';

describe('MenuCpfComponent', () => {
  let component: MenuCpfComponent;
  let fixture: ComponentFixture<MenuCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
