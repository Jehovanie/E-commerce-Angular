import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardAuthGuard } from "src/app/pages/users/@shared/guard/guard-auth.guard";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    { path: "", component: AdminComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_ADMIN' } },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AdminRoutingModule { }

