import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'irina-addenet';
  classBackground: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       console.log(event.url);
        this.classBackground = (event.url != '/') && (event.url != '/accueil');
      }
    });
  }
}
