import { TestBed } from '@angular/core/testing';

import { ZindexManagerService } from './zindex-manager.service';

describe('ZindexManagerService', () => {
  let service: ZindexManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZindexManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
