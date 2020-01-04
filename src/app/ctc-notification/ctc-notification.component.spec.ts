import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcNotificationComponent } from './ctc-notification.component';

describe('CtcNotificationComponent', () => {
  let component: CtcNotificationComponent;
  let fixture: ComponentFixture<CtcNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtcNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtcNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
