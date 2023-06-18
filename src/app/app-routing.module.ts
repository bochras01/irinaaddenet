import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SlideShowComponent} from "./slide-show/slide-show.component";
import {ContactComponent} from "./contact/contact.component";
import {PricesComponent} from "./prices/prices.component";
import {AboutComponent} from "./about/about.component";
import {CryolypoliseComponent} from "./cryolypolise/cryolypolise.component";

const routes: Routes = [
  {
    path: 'a-propos',
    component: AboutComponent,
    title: "La cabinet"
  },
  {
    path: 'cryolipolyse',
    component: CryolypoliseComponent,
    title: "Cryolipolyse"

  },
  {
    path: 'lasers',
    loadChildren: () => import('./lasers/lasers.module').then(m => m.LasersModule),
  },
  {
    path: 'esthetique',
    loadChildren: () => import('./esthetique/esthetique.module').then(m => m.EsthetiqueModule),
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
