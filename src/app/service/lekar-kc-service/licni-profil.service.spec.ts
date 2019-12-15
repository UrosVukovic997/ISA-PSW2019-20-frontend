import { TestBed } from '@angular/core/testing';

import { LicniProfilLekaraService } from './licni-profil.service';

describe('LicniProfilLekaraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicniProfilLekaraService = TestBed.get(LicniProfilLekaraService);
    expect(service).toBeTruthy();
  });
});
