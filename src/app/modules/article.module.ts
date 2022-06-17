import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ShowComponent } from '../pages/show/show.component';
import { StartRatingComponent } from '../pages/@shared/start-rating/start-rating.component';
import { NavComponent } from '../pages/@shared/nav/nav.component';
import { FooterComponent } from '../pages/@shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../pages/@shared/card/card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ALaUneComponent } from '../pages/@shared/aLaUne/a-la-une.component';



@NgModule({
  declarations: [
    HomeComponent,
    ShowComponent,
    StartRatingComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    ALaUneComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class ArticleModule { }
