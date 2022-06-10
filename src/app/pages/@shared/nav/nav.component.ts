import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/services/auth__service/service-auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    constructor(public authService: ServiceAuthService, private router: Router) { }

    ngOnInit(): void {
    }

    goToDashBoard() {

        let role = this.authService.getRole();
        if (role === 'ROLE_ADMIN') {
            this.router.navigate(['/admin']);
        } else if (role == 'ROLE_USER') {
            this.router.navigate(['/user']);
        } else {
            this.router.navigate(['/login']);
        }
    }

    logout() {
        this.authService.logout()
            .subscribe(res => {
                if (!res.success) {
                    this.router.navigate(['/home']);
                }
            })
    }
}