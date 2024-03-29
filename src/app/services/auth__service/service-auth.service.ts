import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServiceAuthService {

    admin: any = {
        email: "admin@gmail.com",
        password: "admin"
    };

    user: any = {
        email: "user@gmail.com",
        password: "user"
    }

    isLogin = false;
    roleAs!: string | null;

    constructor() { }

    login(value: string) {
        this.isLogin = true;
        this.roleAs = value;

        localStorage.setItem('STATE', 'true');
        localStorage.setItem('ROLE', this.roleAs);

        return of({ success: this.isLogin, role: this.roleAs });
    }

    logout() {
        this.isLogin = false;
        this.roleAs = "";

        localStorage.setItem('STATE', 'false');
        localStorage.setItem('ROLE', this.roleAs);

        return of({ success: this.isLogin, role: this.roleAs })
    }

    isLoggedIn() {

        const loggedIn = localStorage.getItem('STATE');
        if (loggedIn === 'true') {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }

        return this.isLogin;
    }

    getRole() {

        this.roleAs = localStorage.getItem('ROLE');
        return this.roleAs;
    }
}
