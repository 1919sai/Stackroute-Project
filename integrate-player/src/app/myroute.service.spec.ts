import { TestBed } from '@angular/core/testing';

import { MyrouteService } from './myroute.service';

describe('MyrouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyrouteService = TestBed.get(MyrouteService);
    expect(service).toBeTruthy();
  });
});
