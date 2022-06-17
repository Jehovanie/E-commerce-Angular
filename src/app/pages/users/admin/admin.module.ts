import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { MenuComponent } from "./_elements/menu/menu.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { UsersComponent } from './_elements/users/users.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsComponent } from './_elements/products/products.component';
import { SubStractText } from "../../@shared/pipe/ststrac.pipe";
import { EditProductComponent } from './_elements/edit-product/edit-product.component';

@NgModule({
    declarations: [
        AdminComponent,
        MenuComponent,
        UsersComponent,
        ProductsComponent,
        SubStractText,
        EditProductComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        FormsModule
    ]
})

export class AdminModule { }