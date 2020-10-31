import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Master } from './../model/master';
import { GenericService } from '../generic/service/generic.service';

@Injectable()
export class MasterService extends GenericService<Master> {

  path = 'master1';

  constructor(http: HttpClient) {
    super(http);
  }
}
