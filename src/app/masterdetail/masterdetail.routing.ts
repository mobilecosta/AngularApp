import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDetailComponent } from './masterdetail.component';

const masterdetailRoutes: Routes = [
  { path: '', component: MasterDetailComponent }
];
@NgModule({
  imports: [RouterModule.forChild(masterdetailRoutes)],
  exports: [RouterModule]
})
export class MasterDetailRoutingModule { }
