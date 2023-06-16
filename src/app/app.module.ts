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
import { TraitmentComponent } from './traitment/traitment.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BotoxComponent } from './botox/botox.component';

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
    TraitmentComponent,
    BotoxComponent,
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