import { TestBed } from '@angular/core/testing';

import { ParamsSetService } from './params-set.service';

describe('ParamsSetService', () => {
  let service: ParamsSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
