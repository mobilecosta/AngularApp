import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  authOk = new BehaviorSubject<boolean>(false);
  private response:any;
  private readonly URLlogin = environment.apiLogin;

  constructor(
    private router: Router,
    private userService: UserService,
    private http: HttpClient
    ) {}


  async loginAuth(usuario): Promise<boolean> {
    let tokenwso2:string = '';

    await this.getLogin(usuario.login,usuario.password).toPromise()
      .then(res => {
        tokenwso2 = res['token'];
      })
      .catch(err => {
        console.log('error', err);
      });

    if (tokenwso2 != '') {
      this.userService.existUser(usuario.login)
      .then(() => {
        sessionStorage.setItem('user', usuario.login);
        this.authOk.next(true);
        this.router.navigate(['home']);
      } );
      return true;
    }
    return false;
  }

  getLogin(user,psw):Observable<any>  {
    let cRet:any;
    let cBody = { "email":user,
                  "password":btoa(psw) };

    return this.http.post(this.URLlogin+'/users/login',cBody)
  }

  isLoggedIn(): boolean {
    if (
      sessionStorage.getItem('user') === '' ||
      sessionStorage.getItem('user') === null
    ) {
      return false;
    } else {
      this.authOk.next(true);
      return true;
    }
  }

  logoutAuth(): void {
    sessionStorage.setItem('user', '');
    this.authOk.next(false);
    this.router.navigate(['login']);
  }

  getAuth(): Observable<boolean> {
    return this.authOk.asObservable();
  }

}
