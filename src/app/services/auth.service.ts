import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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

  authenticate(email: string, password: string, rememberUser: boolean) {
    return this.http
      .post(API + '/login', {email, password}, { observe: 'response' })
      .pipe(tap(res => {

       const authToken = res.headers.get('accessToken'); // token de autenticação
       this.userService.setToken(authToken, rememberUser); // gravando no navegador
      }));
  }
}
