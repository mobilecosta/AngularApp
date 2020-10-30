import { LoginGuard } from './shared/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/authentication/login/login.component';
import { MasterComponent } from './layout/master/master.component';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [LoginGuard], data: { title: 'Bem-vindo' } },
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: { title: 'Bem-vindo' } },
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard], data: { title: 'Pagina Principal' } },
    { path: 'master', component: MasterComponent, canActivate: [LoginGuard]
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
