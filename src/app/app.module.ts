import { AuthGuard } from './shared/auth.guard';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './layout/authentication/login/login.component';
import { PoModule } from '@po-ui/ng-components';
import { PoPageLoginModule, PoModalPasswordRecoveryModule, PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './layout/home/home.component';
import { MasterComponent } from './layout/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    CoreModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoModule,
    PoTemplatesModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
