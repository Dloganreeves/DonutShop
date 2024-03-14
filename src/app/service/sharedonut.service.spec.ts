import { TestBed } from '@angular/core/testing';

import { SharedonutService } from './sharedonut.service';

describe('SharedonutService', () => {
  let service: SharedonutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedonutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
