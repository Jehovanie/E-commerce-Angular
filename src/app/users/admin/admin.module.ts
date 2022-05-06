import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MenuComponent } from "../@shared/admin/menu/menu.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations: [
        AdminComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule

    ]
})

export class AdminModule { }