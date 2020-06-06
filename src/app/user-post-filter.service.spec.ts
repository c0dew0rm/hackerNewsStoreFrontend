import { TestBed } from '@angular/core/testing';

import { UserPostFilterService } from './user-post-filter.service';

describe('UserPostFilterService', () => {
  let service: UserPostFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPostFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
