import { TestBed, inject } from '@angular/core/testing';

import { BookReviewsService } from './book-reviews.service';

describe('BookReviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookReviewsService]
    });
  });

  it('should be created', inject([BookReviewsService], (service: BookReviewsService) => {
    expect(service).toBeTruthy();
  }));
});
