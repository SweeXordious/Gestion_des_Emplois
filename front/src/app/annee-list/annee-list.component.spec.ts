import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeListComponent } from './annee-list.component';

describe('AnneeListComponent', () => {
  let component: AnneeListComponent;
  let fixture: ComponentFixture<AnneeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnneeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnneeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
