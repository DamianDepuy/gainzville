import { TestBed, inject } from '@angular/core/testing';

import { GainzService } from './gainz.service';

describe('GainzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GainzService]
    });
  });

  it('should be created', inject([GainzService], (service: GainzService) => {
    expect(service).toBeTruthy();
  }));
});
