import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email !: string;
    password !: number;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    onSubmit() {

        /*
            objective de demain :
                1 - generate une fonction qui hashe un mots de passe
                2 - traite une formulaire avant de rediriger dans un page home
                
        */

        const regex = /^[^\s@]+@[^\s@]{2,}$/i;

        if (regex.test(this.email)) {
            console.log("this email is good ... ")
        } else {
            console.log("this email is not good ... ")
        }

        console.log(this.email);
        console.log(this.password);

        const user = {
            email: this.email,
            pawsword: this.password
        }

        this.router.navigateByUrl('/dasboard');
    }

}
