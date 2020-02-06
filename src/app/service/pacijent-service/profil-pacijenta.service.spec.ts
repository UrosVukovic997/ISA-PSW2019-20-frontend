import { TestBed } from '@angular/core/testing';

import { ProfilPacijentaService } from './profil-pacijenta.service';

describe('ProfilPacijentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilPacijentaService = TestBed.get(ProfilPacijentaService);
    expect(service).toBeTruthy();
  });
});
