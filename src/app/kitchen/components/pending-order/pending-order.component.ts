import { Component, Input, OnInit } from '@angular/core';
import { OrderBd, OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css'],
})
export class PendingOrderComponent implements OnInit {
   @Input() detailOrder!: OrderData;

  constructor() {}

  ngOnInit(): void {
    console.log('');
  }
}
