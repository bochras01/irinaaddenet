import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lazer-offers',
  templateUrl: './lazer-offers.component.html',
  styleUrls: ['./lazer-offers.component.scss']
})


export class LazerOffersComponent {
  constructor(private router: Router) {
  }


  naviagetToCase(url: string): void {
    this.router.navigate([url],);
  }
}
