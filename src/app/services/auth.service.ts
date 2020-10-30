import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

  async authenticate(email: string, password: string, rememberUser: boolean): Promise<boolean> {

    await this.getLogin(email,password).toPromise()
      .then(res => {
        this.userService.setToken(email, res['accessToken'], rememberUser);
        return true;
      })
      .catch(err => {
        console.log('error', err);
      });

      return false;
  }

  getLogin(email,psw):Observable<any>  {
    return this.http.post(API + '/login', { "email": email,
                                            "password": psw })
  }

}
