import { TestBed, inject } from '@angular/core/testing';

import { RidesDataService } from './rides-data.service';

describe('RidesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RidesDataService]
    });
  });

  it('should be created', inject([RidesDataService], (service: RidesDataService) => {
    expect(service).toBeTruthy();
  }));
});
