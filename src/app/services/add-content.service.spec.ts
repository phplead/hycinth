import { TestBed } from '@angular/core/testing';

import { AddContentService } from './add-content.service';

describe('AddContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddContentService = TestBed.get(AddContentService);
    expect(service).toBeTruthy();
  });
});
