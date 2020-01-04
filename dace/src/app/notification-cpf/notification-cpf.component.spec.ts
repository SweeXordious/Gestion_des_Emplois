import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCpfComponent } from './notification-cpf.component';

describe('NotificationCpfComponent', () => {
  let component: NotificationCpfComponent;
  let fixture: ComponentFixture<NotificationCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
