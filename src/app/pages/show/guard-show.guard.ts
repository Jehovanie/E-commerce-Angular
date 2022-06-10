import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardShowGuard implements CanActivate {

  constructor(private router: Router) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(route.params)

    const allType: Array<string> = ["car", "informatique", "scouter"]
    const type: string = route.params.type;
    const id: number = +route.params.id;

    if (allType.indexOf(type) === -1 || id <= 0) {

      alert("Element not found ....")
      this.router.navigate(["/home"])
      return false;
    }

    return true;
  }

}
