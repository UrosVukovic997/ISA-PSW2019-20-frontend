import { TestBed } from '@angular/core/testing';

import { KlinikaLekariServiceService } from './klinika-lekari-service.service';

describe('KlinikaLekariServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KlinikaLekariServiceService = TestBed.get(KlinikaLekariServiceService);
    expect(service).toBeTruthy();
  });
});
