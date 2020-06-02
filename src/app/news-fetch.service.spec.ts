import { TestBed } from '@angular/core/testing';

import { NewsFetchService } from './news-fetch.service';

describe('NewsFetchService', () => {
  let service: NewsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
