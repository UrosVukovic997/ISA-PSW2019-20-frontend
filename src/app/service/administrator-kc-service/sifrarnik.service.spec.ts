import { TestBed } from '@angular/core/testing';

import { SifrarnikService } from './sifrarnik.service';

describe('SifrarnikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SifrarnikService = TestBed.get(SifrarnikService);
    expect(service).toBeTruthy();
  });
});
