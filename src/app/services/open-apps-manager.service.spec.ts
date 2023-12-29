import { TestBed } from '@angular/core/testing';

import { OpenAppsManagerService } from './open-apps-manager.service';

describe('OpenAppsManagerService', () => {
  let service: OpenAppsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAppsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
