import { Component } from '@angular/core';
import { Stack } from "./utils/stack";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angApp';

  constructor(private stack: Stack) {
    this.stack.peek();
  }
}
