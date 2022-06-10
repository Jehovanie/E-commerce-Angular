import { TestBed } from '@angular/core/testing';

import { GuardShowGuard } from './guard-show.guard';

describe('GuardShowGuard', () => {
  let guard: GuardShowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardShowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
