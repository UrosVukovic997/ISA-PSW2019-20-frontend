import { TestBed } from '@angular/core/testing';

import { ProfilAdminaService } from './profil-admina.service';

describe('ProfilAdminaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilAdminaService = TestBed.get(ProfilAdminaService);
    expect(service).toBeTruthy();
  });
});
