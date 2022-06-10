import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowComponent } from './pages/show/show.component';
import { GuardShowGuard } from './pages/show/guard-show.guard';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "show/:type/:id", component: ShowComponent, canActivate: [GuardShowGuard] },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", loadChildren: () => import("./pages/users/admin/admin.module").then(m => m.AdminModule) },
  { path: "user", loadChildren: () => import("./pages/users/other/other.module").then(m => m.OtherModule) },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
