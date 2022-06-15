import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/services/auth__service/service-auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email !: string;
    password !: number;
    error!: any;

    @ViewChild('closedModal') closeModal!: ElementRef

    constructor(private router: Router, private authService: ServiceAuthService) {
    }

    ngOnInit(): void {
    }

    login(val: string) {
        this.authService.login(val).subscribe(res => {
            if (res.success) {
                this.closeModal.nativeElement.click();
            }
        });
    }

    onSubmit() {

        // const regex = /^[^\s@]+@[^\s@]{2,}$/i;
        if (this.email === this.authService.admin.email && this.password === this.authService.admin.password) {

            this.login('ROLE_ADMIN');
            this.router.navigate(['/admin']);
        } else if (this.email === this.authService.user.email && this.password === this.authService.user.password) {

            this.login('ROLE_USER');
            this.router.navigate(['/user']);
        } else {
        }
        // this.router.navigateByUrl('/dasboard');
    }



}
