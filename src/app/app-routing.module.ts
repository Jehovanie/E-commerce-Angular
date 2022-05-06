import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './users/admin/admin.component';
import { GuardAuthGuard } from './guard/guard-auth.guard';
import { OtherComponent } from './users/other/other.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "show", component: ShowComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", component: AdminComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_ADMIN' } },
  { path: "user", component: OtherComponent, canActivate: [GuardAuthGuard], data: { role: 'ROLE_USER' } },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
