import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './pages/@shared/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/@shared/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './pages/@shared/card/card.component';
import { ShowComponent } from './pages/show/show.component';
import { StartRatingComponent } from './pages/@shared/start-rating/start-rating.component';
import { AdminModule } from './pages/users/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent,
    CardComponent,
    ShowComponent,
    StartRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
