import { TestBed } from '@angular/core/testing';

import { OdsustvoOdmorService } from './odsustvoOdmor.service';

describe('OdsustvoOdmorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdsustvoOdmorService = TestBed.get(OdsustvoOdmorService);
    expect(service).toBeTruthy();
  });
});
