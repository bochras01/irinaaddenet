import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazerOffersComponent} from './lazer-offers/lazer-offers.component';
import {EpilationComponent} from './epilation/epilation.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [

  {
    path: '',
    component: LazerOffersComponent,
    title: "Lasers"
  },
  {
    path: 'epilation-laser',
    component:EpilationComponent,
    title: "Lasers"
  },
];

@NgModule({
  declarations: [
    LazerOffersComponent,
    EpilationComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LasersModule {
}
