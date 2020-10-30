import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { PoNotificationService } from '@po-ui/ng-components';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private errorLogin = '';

  constructor(
    private router: Router,
    private notify: PoNotificationService,
    private http: HttpClient,
    private userService: UserService
    ) { };

  async authenticate(email: string, password: string, rememberUser: boolean): Promise<boolean> {
    var lRet: boolean;

    this.errorLogin = '';
    lRet = false;
    await this.getLogin(email,password).toPromise()
      .then(res => {
        this.userService.setToken(email, res['accessToken'], rememberUser);
        this.router.navigate(['home']);
        lRet = true;
        return true;
      })
      .catch(err => {
        this.errorLogin = 'Dados Inválidos';
        console.log('error', err);
        if (err == null) {
          this.errorLogin = err;
        };
      });

//      this.notify.error({
//        duration: 2000,
//        message: this.getErro,
//        actionLabel: 'x',
//      });

      return lRet;
  };

  getLogin(email,psw):Observable<any>  {
    return this.http.post(API + '/login', { "email": email,
                                            "password": psw });
  };

  getErro(): String {
    return this.errorLogin;
  }

}
