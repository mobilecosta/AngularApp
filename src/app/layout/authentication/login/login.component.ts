import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';
import { PoPageLogin } from '@po-ui/ng-templates';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    contactEmail: string;
    login: string;
    loginPattern: string;
    loginError: string;
    loginErrors: Array<string>;
    passwordError: string;
    passwordErrors: Array<string>;
    passwordPattern: string;
    recovery: string;
    registerUrl: string;
    exceededAttempts: number;
    logo: string;

    constructor(
        private authService: AuthService
    ) {  }

    ngOnInit() {
        this.restore();
    }

    addLoginError() {
        this.loginErrors.push(this.loginError);
        this.loginError = '';
    }

    addPasswordError() {
        this.passwordErrors.push(this.passwordError);
        this.passwordError = '';
    }

    loginSubmit(formData: PoPageLogin) {

      this.authService.authenticate(formData.login, formData.password, formData.rememberUser);

    };

    restore() {
        this.contactEmail = 'mobile.costa@gmail.com';
        this.exceededAttempts = 0;
        this.login = '';
        this.loginPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
        this.loginError = '';
        this.loginErrors = [];
        this.logo = './assets/img/home.png';
        this.passwordError = '';
        this.passwordErrors = [];
        this.passwordPattern = '';
        this.passwordError = '';
        this.passwordErrors = [];
        this.recovery = '';
        this.registerUrl = '';
    }
}
