import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardAuthGuard } from "src/app/pages/users/@shared/guard/guard-auth.guard";
import { AdminComponent } from "./admin.component";
import { EditProductComponent } from "./_elements/edit-product/edit-product.component";
import { ProductsComponent } from "./_elements/products/products.component";
import { UsersComponent } from "./_elements/users/users.component";

const routes: Routes = [
    { path: "", redirectTo: "/admin/users", pathMatch: "full" },
    { path: "", component: AdminComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_ADMIN' } },
    { path: "users", component: UsersComponent },
    { path: "product", component: ProductsComponent },
    { path: "product/edit/:id", component: EditProductComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AdminRoutingModule { }

