import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazerOffersComponent} from './lazer-offers/lazer-offers.component';
import {EpilationComponent} from './epilation/epilation.component';
import {RouterModule, Routes} from "@angular/router";
import {Co2Component} from './co2/co2.component';
import {MycoseVaginaleComponent} from './mycose-vaginale/mycose-vaginale.component';
import {CouperoseComponent} from './couperose/couperose.component';
import {CouMainComponent} from './cou-main/cou-main.component';
import {GynecoComponent} from './gyneco/gyneco.component';


const routes: Routes = [

  {
    path: '',
    component: LazerOffersComponent,
    title: "Lasers"
  },
  {
    path: 'epilation-laser',
    component: EpilationComponent,
    title: "Lasers"
  },

  {
    path: 'couperose-rougeurs-visage',
    component: CouperoseComponent,
    title: "Couperose et rougeurs visage"
  },
  {
    path: 'rajeunissement',
    component: CouMainComponent,
    title: "Rajeunissement cou, décolleté et dos des mains"
  },
  {
    path: 'gynecologie-esthetique',
    component: GynecoComponent,
    title: "Gynécologie esthétique et réparatrice"
  },
  {
    path: 'rejuvenation-vaginalee',
    component: MycoseVaginaleComponent,
    title: "Réjuvénation de la muqueuse vaginalee"
  },
  {
    path: 'laser-co2',
    component: Co2Component,
    title: "Traitements laser CO2"
  },
];

@NgModule({
  declarations: [
    LazerOffersComponent,
    EpilationComponent,
    Co2Component,
    MycoseVaginaleComponent,
    CouperoseComponent,
    CouMainComponent,
    GynecoComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LasersModule {
}
