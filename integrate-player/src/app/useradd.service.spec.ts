import { TestBed } from '@angular/core/testing';

import { UseraddService } from './useradd.service';

describe('UseraddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseraddService = TestBed.get(UseraddService);
    expect(service).toBeTruthy();
  });
});
