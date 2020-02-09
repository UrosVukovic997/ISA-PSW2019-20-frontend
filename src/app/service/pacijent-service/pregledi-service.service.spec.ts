import { TestBed } from '@angular/core/testing';

import { PreglediServiceService } from './pregledi-service.service';

describe('PreglediServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreglediServiceService = TestBed.get(PreglediServiceService);
    expect(service).toBeTruthy();
  });
});
