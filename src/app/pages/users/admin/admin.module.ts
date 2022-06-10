import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MenuComponent } from "./_elements/menu/menu.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { UsersComponent } from './_elements/users/users.component';
import { FormsModule } from "@angular/forms";
import { ProductsComponent } from './_elements/products/products.component';
import { SubStractText } from "../../@shared/pipe/ststrac.pipe";

@NgModule({
    declarations: [
        AdminComponent,
        MenuComponent,
        UsersComponent,
        ProductsComponent,
        SubStractText
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