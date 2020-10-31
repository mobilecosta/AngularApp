import { MasterDetailRoutingModule } from './../masterdetail/masterdetail.routing';
import { NgModule } from '@angular/core';
import { MasterDetailComponent } from './masterdetail.component';
import { SharedModule } from './../shared/shared.module';
import { MasterDetailService } from './masterdetail.service';

@NgModule({
  imports: [
    SharedModule,
    MasterDetailRoutingModule
  ],
  declarations: [MasterDetailComponent],
  providers: [MasterDetailService]
})
export class MasterDetailModule { }
