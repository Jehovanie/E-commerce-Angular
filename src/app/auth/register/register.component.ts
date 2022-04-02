import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formRegister !: FormGroup;

    constructor(private formBuilder: FormBuilder) {

        this.formRegister = this.formBuilder.group({
            "username": [""],
            "lastname": [""],
            "email": [""],
            "password": [""],
            "fixpassword": [""]
        })
    }

    ngOnInit(): void {
    }

    onSubmit(obj: any) {

        if (obj.value.password === obj.value.fixpassword) {

            let username = obj.value.username;
            let lastname = obj.value.lastname;
            let email = obj.value.email;
            let password = obj.value.password;

            const regex = /^[^\s@]+@[^\s@]{2,}$/i;

            if (!regex.test(email)) {

            }

            const user = {
                username: username.trim(),
                lastname: lastname.trim(),
                email: email,
                password: password,
            }

            console.log(user)

        } else {

        }

    }

}
