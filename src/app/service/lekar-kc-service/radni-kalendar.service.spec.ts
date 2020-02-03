import { TestBed } from '@angular/core/testing';

import { RadniKalendarService } from './radni-kalendar.service';

describe('RadniKalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadniKalendarService = TestBed.get(RadniKalendarService);
    expect(service).toBeTruthy();
  });
});
