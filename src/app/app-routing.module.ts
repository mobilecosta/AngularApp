import { AuthGuard } from './shared/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/authentication/login/login.component';
import { MasterComponent } from './layout/master/master.component';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard], data: { title: 'Bem-vindo' } },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { title: 'Bem-vindo' } },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'Pagina Principal' } },
    { path: 'master', component: MasterComponent, canActivate: [AuthGuard]
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
