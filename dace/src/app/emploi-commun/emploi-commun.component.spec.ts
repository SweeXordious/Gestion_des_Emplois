import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiCommunComponent } from './emploi-commun.component';

describe('EmploiCommunComponent', () => {
  let component: EmploiCommunComponent;
  let fixture: ComponentFixture<EmploiCommunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiCommunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiCommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
