import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceAuthService } from '../services/service-auth.service';

@Injectable({
    providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

    constructor(private authService: ServiceAuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        let url: string = state.url;

        return this.checkUserLogin(route, url);
    }

    checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {

        if (this.authService.isLoggedIn()) { /// if user connected
            const userRole = this.authService.getRole(); // possible userRole is null

            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/login']);
                return false;
            }

            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}
