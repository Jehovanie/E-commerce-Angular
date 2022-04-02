import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './users/admin/admin.component';
import { GuardAuthGuard } from './guard/guard-auth.guard';
import { OtherComponent } from './users/other/other.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", component: AdminComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_ADMIN' } },
  { path: "user", component: OtherComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_USER' } },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
