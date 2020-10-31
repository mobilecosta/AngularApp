import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

const masterRoutes: Routes = [
  { path: '', component: MasterComponent }
];
@NgModule({
  imports: [RouterModule.forChild(masterRoutes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
