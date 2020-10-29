import { Injectable } from '@angular/core';

const KEY = 'AngularAppToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    hasToken(): boolean {
        return !!this.getToken();
    }

    setToken(token, rememberUser: boolean) {
        if (rememberUser) {
            window.localStorage.setItem(KEY, token);
        } else {
            window.sessionStorage.setItem(KEY, token);
        }
    }

    isSession() {
        const token = window.localStorage.getItem(KEY);
        const rememberUser = token ? true : false;

        return !rememberUser;
    }

    getToken() {
        const token = window.localStorage.getItem(KEY);
        const rememberUser = token ? true : false;

        if (rememberUser) {
            return token;
        } else {
            return window.sessionStorage.getItem(KEY);
        }
    }

    removeToken() {
        if (!this.isSession()) {
            window.localStorage.removeItem(KEY);
        } else {
            window.sessionStorage.removeItem(KEY);
        }
    }
}
