import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter',
  template: `<app-header></app-header> <router-outlet></router-outlet>`,
  styles: [
    `
      app-header {
        width: 100%;
      }
    `,
  ],
})
export class WaiterComponent {
  constructor() {}
}
