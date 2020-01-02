import { TestBed } from '@angular/core/testing';

import { DispoService } from './dispo.service';

describe('DispoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispoService = TestBed.get(DispoService);
    expect(service).toBeTruthy();
  });
});
