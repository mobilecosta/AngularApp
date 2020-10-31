import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MasterDetail } from './../model/masterdetail';
import { GenericService } from '../generic/service/generic.service';

@Injectable()
export class MasterDetailService extends GenericService<MasterDetail> {

  path = 'masterdetail';

  constructor(http: HttpClient) {
    super(http);
  }
}
