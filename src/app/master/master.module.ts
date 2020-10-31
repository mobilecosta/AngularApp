import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import { SharedModule } from './../shared/shared.module';
import { MasterService } from './master.service';
import { MasterRoutingModule } from './../master/master.routing';

@NgModule({
  imports: [
    SharedModule,
    MasterRoutingModule
  ],
  declarations: [MasterComponent],
  providers: [MasterService]
})
export class MasterModule { }
