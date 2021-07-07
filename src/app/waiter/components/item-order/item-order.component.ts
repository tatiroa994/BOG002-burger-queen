import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.css'],
})
export class ItemOrderComponent {
  @Input() price!: number;
  @Input() index!: number;
  @Input() cantProduct: number;
  @Output() deleteItem = new EventEmitter<number>();
  @Output() priceOrder = new EventEmitter<number>();
  priceTotal!: number;
  constructor() {
    this.cantProduct = 1;
  }

  getPriceTotal(cant: number):void {
    this.priceOrder.emit(cant);
  }

  sendIndex():void {
    this.deleteItem.emit(this.index);
  }
}
