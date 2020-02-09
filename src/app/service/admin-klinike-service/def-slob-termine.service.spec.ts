import { TestBed } from '@angular/core/testing';

import { DefSlobTermineService } from './def-slob-termine.service';

describe('DefSlobTermineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefSlobTermineService = TestBed.get(DefSlobTermineService);
    expect(service).toBeTruthy();
  });
});
