import { TestBed } from '@angular/core/testing';

import { LogovanjeServiceService } from './logovanje-service.service';

describe('LogovanjeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogovanjeServiceService = TestBed.get(LogovanjeServiceService);
    expect(service).toBeTruthy();
  });
});
