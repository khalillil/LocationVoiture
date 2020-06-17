import { TestBed } from '@angular/core/testing';

import { VoitserviceService } from './voitservice.service';

describe('VoitserviceService', () => {
  let service: VoitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
