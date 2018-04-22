import { TestBed, inject } from '@angular/core/testing';

import { DisruptionDataService } from './disruption-data.service';

describe('DisruptionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisruptionDataService]
    });
  });

  it('should be created', inject([DisruptionDataService], (service: DisruptionDataService) => {
    expect(service).toBeTruthy();
  }));
});
