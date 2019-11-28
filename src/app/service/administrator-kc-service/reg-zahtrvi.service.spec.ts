import { TestBed } from '@angular/core/testing';

import { RegZahtrviService } from './reg-zahtrvi.service';

describe('RegZahtrviService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegZahtrviService = TestBed.get(RegZahtrviService);
    expect(service).toBeTruthy();
  });
});
