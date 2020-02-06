import { TestBed } from '@angular/core/testing';

import { SestraServiceService } from './sestra-service.service';

describe('SestraServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SestraServiceService = TestBed.get(SestraServiceService);
    expect(service).toBeTruthy();
  });
});
