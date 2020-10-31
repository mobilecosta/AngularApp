import { NgModule } from '@angular/core';
import { CardCountModule } from './../generic/card-count/card-count.module';
import { HomeComponent } from './home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';
import { MasterService } from './../master/master.service';
import { MasterDetailService } from './../masterdetail/masterdetail.service';

@NgModule({
  imports: [
    SharedModule,
    CardCountModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeDashboardComponent
  ],
  providers: [MasterService,
              MasterDetailService]
})
export class HomeModule { }
