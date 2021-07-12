import { Component, Input, OnInit } from '@angular/core';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-closed-order',
  templateUrl: './closed-order.component.html',
  styleUrls: ['./closed-order.component.css']
})
export class ClosedOrderComponent{
@Input() dataOrder!: OrderData;
  constructor() { }
}
