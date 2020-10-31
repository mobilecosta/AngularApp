/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterdetailService } from './masterdetail.service';

describe('Service: Masterdetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterdetailService]
    });
  });

  it('should ...', inject([MasterdetailService], (service: MasterdetailService) => {
    expect(service).toBeTruthy();
  }));
});
