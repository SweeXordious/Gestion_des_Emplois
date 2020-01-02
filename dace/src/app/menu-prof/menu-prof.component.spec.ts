import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfComponent } from './menu-prof.component';

describe('MenuProfComponent', () => {
  let component: MenuProfComponent;
  let fixture: ComponentFixture<MenuProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
