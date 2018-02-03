import { TestBed, inject } from '@angular/core/testing';

import { DeleteEntryService } from './delete-entry.service';

describe('DeleteEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteEntryService]
    });
  });

  it('should be created', inject([DeleteEntryService], (service: DeleteEntryService) => {
    expect(service).toBeTruthy();
  }));
});
