import { TestBed } from '@angular/core/testing';

import { CheckboxStorageService } from './checkbox-storage.service';

describe('CheckboxStorageService', () => {
  let service: CheckboxStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckboxStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
