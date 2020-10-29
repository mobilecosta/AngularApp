import { LoginGuard } from './shared/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/authentication/login/login.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@po-ui/ng-templates';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard],
        data: {
            title: 'Bem-vindo'
        }
    }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
