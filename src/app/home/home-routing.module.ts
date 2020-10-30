import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeDashboardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
