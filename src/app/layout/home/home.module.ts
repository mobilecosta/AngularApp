import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

import { PoFieldModule, PoButtonModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RouterModule,
        HomeRoutingModule,
        PoFieldModule,
        PoButtonModule
    ]
})
export class HomeModule {

}
