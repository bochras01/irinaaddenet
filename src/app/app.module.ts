import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { PricesComponent } from './prices/prices.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { OffersCardsComponent } from './offers-cards/offers-cards.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    FooterComponent,
    HomeComponent,
    WhoAreWeComponent,
    OffersCardsComponent,
    SlideShowComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
