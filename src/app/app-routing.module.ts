import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SlideShowComponent} from "./slide-show/slide-show.component";
import {ContactComponent} from "./contact/contact.component";
import {TraitmentComponent} from "./traitment/traitment.component";

const routes: Routes = [{
  path: 'le-cabinet',
  component: SlideShowComponent,
  title: "La cabinet"
},
  {path: 'cryolipolyse',
    component: TraitmentComponent,
    title: "Cryolipolyse"
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: "contact"
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
