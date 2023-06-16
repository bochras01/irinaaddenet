import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SlideShowComponent} from "./slide-show/slide-show.component";
import {ContactComponent} from "./contact/contact.component";
import {PricesComponent} from "./prices/prices.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'a-propos',
    component: AboutComponent,
    title: "La cabinet"
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: "contact"
  },
  {
    path: 'prix',
    component: PricesComponent,
    title: "Prix"
  },
  {
    path: 'accueil',
    component: HomeComponent,
    title: "Accueil"
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/accueil',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
