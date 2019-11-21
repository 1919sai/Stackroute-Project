import { TestBed } from '@angular/core/testing';

import { FavrecService } from './favrec.service';

describe('FavrecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavrecService = TestBed.get(FavrecService);
    expect(service).toBeTruthy();
  });
});
