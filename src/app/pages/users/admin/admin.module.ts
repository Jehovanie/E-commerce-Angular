import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MenuComponent } from "../@shared/admin/menu/menu.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { UsersComponent } from './_elements/users/users.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AdminComponent,
        MenuComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule
    ],
    exports: [
        FormsModule
    ]
})

export class AdminModule { }