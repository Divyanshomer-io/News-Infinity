import { TestBed } from '@angular/core/testing';

import { TsnewsapiService } from './tsnewsapi.service';

describe('TsnewsapiService', () => {
  let service: TsnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
