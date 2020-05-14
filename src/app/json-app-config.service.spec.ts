import { TestBed } from '@angular/core/testing';

import { JsonAppConfigService } from './json-app-config.service';

describe('JsonAppConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonAppConfigService = TestBed.get(JsonAppConfigService);
    expect(service).toBeTruthy();
  });
});
