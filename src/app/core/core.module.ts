import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './../layout/authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationModule],
  exports: [CommonModule, AuthenticationModule],
})
export class CoreModule { }
