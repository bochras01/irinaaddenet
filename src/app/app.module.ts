import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { OffersCardsComponent } from './offers-cards/offers-cards.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { CryolypoliseComponent } from './cryolypolise/cryolypolise.component';
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FooterComponent,
    HomeComponent,
    WhoAreWeComponent,
    OffersCardsComponent,
    SlideShowComponent,
    ContactComponent,
    AboutComponent,
    CryolypoliseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    MdbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
