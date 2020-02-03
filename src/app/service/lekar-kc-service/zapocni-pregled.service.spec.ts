import { TestBed } from '@angular/core/testing';

import {ZapocniPregledService} from './zapocni-pregled.service';

describe('ZapocniPregledService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZapocniPregledService = TestBed.get(ZapocniPregledService);
    expect(service).toBeTruthy();
  });
});
