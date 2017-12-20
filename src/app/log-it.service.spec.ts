import { TestBed, inject } from '@angular/core/testing';

import { LogItService } from './log-it.service';

describe('LogItService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogItService]
    });
  });

  it('should be created', inject([LogItService], (service: LogItService) => {
    expect(service).toBeTruthy();
  }));
});
