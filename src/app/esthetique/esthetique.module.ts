import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsthetiqueAffersComponent } from './esthetique-affers/esthetique-affers.component';
import { BotoxComponent } from './botox/botox.component';
import { ComblementRidesComponent } from './comblement-rides/comblement-rides.component';
import { MesotherapieComponent } from './mesotherapie/mesotherapie.component';
import { PeelingComponent } from './peeling/peeling.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [

  {
    path: '',
    component: EsthetiqueAffersComponent,
    title: "Esthétique"
  },
  {
    path: 'botox',
    component: BotoxComponent,
    title: "Botox"
  },
  {
    path: 'mesotherapie',
    component: MesotherapieComponent,
    title: "Mésothérapie / Mesolift"
  },
  {
    path: 'comblement-rides',
    component: ComblementRidesComponent,
    title: "Comblements des rides"
  },
  {
    path: 'peeling',
    component: PeelingComponent,
    title: "Peeling"
  },
];


@NgModule({
  declarations: [
    EsthetiqueAffersComponent,
    BotoxComponent,
    ComblementRidesComponent,
    MesotherapieComponent,
    PeelingComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EsthetiqueModule { }
