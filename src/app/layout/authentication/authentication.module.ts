import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { PoPageLoginModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, PoPageLoginModule],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
