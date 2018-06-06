import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TwitterService } from './twitter.service';

describe('TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([TwitterService], (service: TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
