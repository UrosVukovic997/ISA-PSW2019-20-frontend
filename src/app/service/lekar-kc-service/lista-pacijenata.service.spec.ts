import { TestBed } from '@angular/core/testing';

import { ListaPacijenataService } from './lista-pacijenata.service';

describe('RegZahtrviService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaPacijenataService = TestBed.get(ListaPacijenataService);
    expect(service).toBeTruthy();
  });
});
