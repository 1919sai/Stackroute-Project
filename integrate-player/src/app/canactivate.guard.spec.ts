import { TestBed, async, inject } from '@angular/core/testing';

import { CanactivateGuard } from './canactivate.guard';

describe('CanactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanactivateGuard]
    });
  });

  it('should ...', inject([CanactivateGuard], (guard: CanactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
