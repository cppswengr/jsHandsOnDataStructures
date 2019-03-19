import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Stack } from './utils/stack';

constructor(private stack: Stack, private router: Router) {

  // sunbscrine to the routers event
  this.router.events.subscribe((val) => {

    // determine if router is telling us that is has ended transition
    if (val instanceof NavigationEnd) {

      // state change done, add to stack
      this.stack.push(val);
    }
  });
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'back-button';
}

