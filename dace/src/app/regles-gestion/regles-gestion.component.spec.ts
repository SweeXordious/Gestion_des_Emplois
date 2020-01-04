import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglesGestionComponent } from './regles-gestion.component';

describe('ReglesGestionComponent', () => {
  let component: ReglesGestionComponent;
  let fixture: ComponentFixture<ReglesGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglesGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglesGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
