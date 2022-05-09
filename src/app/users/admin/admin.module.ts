import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MenuComponent } from "../@shared/admin/menu/menu.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { UsersComponent } from './_elements/users/users.component';

@NgModule({
    declarations: [
        AdminComponent,
        MenuComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule

    ]
})

export class AdminModule { }