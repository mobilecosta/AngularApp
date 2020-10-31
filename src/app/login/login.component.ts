import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';
import { PoStorageService } from '@po-ui/ng-storage';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hideRememberUser: boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private storage: PoStorageService,
    private poNotification: PoNotificationService) { }

  loginSubmit(formData: PoPageLogin) {
    const user = Object.assign({ email: formData.login, password: formData.password });

    this.loginService.post(user).subscribe((res) => {
      this.storage.set('isLoggedIn', 'true').then(() => {
        this.router.navigate(['/']);
      });
    }, (res) => {
      if (res.status > 0)
        { this.poNotification.error('Usuário ou senha invalidos ! Tente novamente.') };
    });

  }

}
