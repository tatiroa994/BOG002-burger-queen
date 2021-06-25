import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
  @Input() imgProduct: string;
  @Input() product: string;
  @Input() price: number;
  @Output() openModal = new EventEmitter<null>();

  constructor() {
    this.imgProduct = Input();
    this.product = Input();
    this.price = Input();
  }

  onOpenModal() {
    this.openModal.emit();
  }
}
