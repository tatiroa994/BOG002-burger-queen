import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.css'],
})
export class QuantityControlComponent {
  @Input() cant: number;
  @Output() cantChanged = new EventEmitter<number>();
  constructor() {
    this.cant = 1;
  }

  dec() {
    this.counter(-1);
  }
  inc() {
    this.counter(+1);
  }

  counter(n: number) {
    this.cant = Math.min(50, Math.max(1, this.cant + n));
    this.cantChanged.emit(this.cant);
  }
}
