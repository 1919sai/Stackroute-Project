import { TestBed } from '@angular/core/testing';

import { CricapiService } from './cricapi.service';

describe('CricapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CricapiService = TestBed.get(CricapiService);
    expect(service).toBeTruthy();
  });
});
