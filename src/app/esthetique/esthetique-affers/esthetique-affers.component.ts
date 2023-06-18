import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-esthetique-affers',
  templateUrl: './esthetique-affers.component.html',
  styleUrls: ['./esthetique-affers.component.scss']
})
export class EsthetiqueAffersComponent {
  constructor(private router: Router) {
  }


  naviagetToCase(url: string): void {
    this.router.navigate([url],);
  }
}
