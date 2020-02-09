import { TestBed } from '@angular/core/testing';

import { OdsustvoOdmoriService } from './odsustvo-odmori.service';

describe('OdsustvoOdmoriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdsustvoOdmoriService = TestBed.get(OdsustvoOdmoriService);
    expect(service).toBeTruthy();
  });
});
