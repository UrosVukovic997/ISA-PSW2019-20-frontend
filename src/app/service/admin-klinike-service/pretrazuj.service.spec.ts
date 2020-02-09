import { TestBed } from '@angular/core/testing';

import { PretrazujService } from './pretrazuj.service';

describe('PretrazujService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PretrazujService = TestBed.get(PretrazujService);
    expect(service).toBeTruthy();
  });
});
