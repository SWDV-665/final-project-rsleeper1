import { TestBed } from '@angular/core/testing';

import { Tab1InputService } from './tab1-input.service';

describe('Tab1InputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tab1InputService = TestBed.get(Tab1InputService);
    expect(service).toBeTruthy();
  });
});
