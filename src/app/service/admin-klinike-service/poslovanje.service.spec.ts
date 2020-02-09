import { TestBed } from '@angular/core/testing';

import { PoslovanjeService } from './poslovanje.service';

describe('PoslovanjeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoslovanjeService = TestBed.get(PoslovanjeService);
    expect(service).toBeTruthy();
  });
});
