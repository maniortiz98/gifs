import { TestBed } from '@angular/core/testing';

import { GisfService } from './gisf.service';

describe('GisfService', () => {
  let service: GisfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GisfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
