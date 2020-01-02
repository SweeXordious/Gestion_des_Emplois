import { TestBed } from '@angular/core/testing';

import { DaceGuardService } from './dace-guard.service';

describe('DaceGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaceGuardService = TestBed.get(DaceGuardService);
    expect(service).toBeTruthy();
  });
});
