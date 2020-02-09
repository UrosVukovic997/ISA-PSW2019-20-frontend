import { TestBed } from '@angular/core/testing';

import { ProfilKlinikeService } from './profil-klinike.service';

describe('ProfilKlinikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilKlinikeService = TestBed.get(ProfilKlinikeService);
    expect(service).toBeTruthy();
  });
});
