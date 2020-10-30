import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { User } from '../interfaces/user';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName = '';

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() &&
            this.decodeAndNotify('');
    }

    setToken(user: string, token: string, rememberUser: boolean) {
        this.tokenService.setToken(token, rememberUser);
        this.decodeAndNotify(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(email: string) {
        var user: User;

        this.userName = email;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}
