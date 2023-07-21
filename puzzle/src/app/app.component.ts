import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart,NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  DoCheck {
  public isGame: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  ngDoCheck(): void {
    this.checkRoute();  
  }

  checkRoute(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          // @ts-ignore
          if (this.route._routerState.snapshot.url === '/games') {
            this.isGame = true;
          } else {
            this.isGame = false;
             // @ts-ignore
          }
      }
    });

  }

}
