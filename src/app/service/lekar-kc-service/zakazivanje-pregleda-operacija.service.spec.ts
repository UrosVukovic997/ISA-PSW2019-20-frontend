import { TestBed } from '@angular/core/testing';

import { ZakazivanjePregledaOperacijaService } from './zakazivanje-pregleda-operacija.service';

describe('ZakazivanjePregledaOperacijaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZakazivanjePregledaOperacijaService = TestBed.get(ZakazivanjePregledaOperacijaService);
    expect(service).toBeTruthy();
  });
});
