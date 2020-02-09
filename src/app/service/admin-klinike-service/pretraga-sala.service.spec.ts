import { TestBed } from '@angular/core/testing';

import { PretragaSalaService } from './pretraga-sala.service';

describe('PretragaSalaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PretragaSalaService = TestBed.get(PretragaSalaService);
    expect(service).toBeTruthy();
  });
});
