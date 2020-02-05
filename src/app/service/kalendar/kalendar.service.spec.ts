import { TestBed } from '@angular/core/testing';

import { KalendarService } from './kalendar.service';

describe('KalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KalendarService = TestBed.get(KalendarService);
    expect(service).toBeTruthy();
  });
});
