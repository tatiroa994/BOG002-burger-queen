import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  template: `<button [class]="btnType">{{ text }}</button>`,
  styleUrls: ['./buttom.component.css'],
})
export class ButtomComponent {
  @Input() text: string;
  @Input() btnType: string;
  constructor() {
    this.text = Input();
    this.btnType = Input();
  }
}
