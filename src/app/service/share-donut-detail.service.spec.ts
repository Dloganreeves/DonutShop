import { TestBed } from '@angular/core/testing';

import { ShareDonutDetailService } from './share-donut-detail.service';

describe('ShareDonutDetailService', () => {
  let service: ShareDonutDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDonutDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
