import { TestBed } from '@angular/core/testing';

import { KendoServiceService } from './kendo-service.service';

describe('KendoServiceService', () => {
  let service: KendoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
