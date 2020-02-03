import { TestBed } from '@angular/core/testing';

import { ZakazivanjePregledaService } from './zakazivanje-pregleda.service';

describe('ZakazivanjePregledaOperacijaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZakazivanjePregledaService = TestBed.get(ZakazivanjePregledaService);
    expect(service).toBeTruthy();
  });
});
