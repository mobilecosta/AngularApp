import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) // quando é um arquivo de rotas que depende que um "pai", deve-se definir o método forChild
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}
