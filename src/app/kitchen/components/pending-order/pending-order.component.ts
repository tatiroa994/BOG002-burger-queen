import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderBd, OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css'],
})
export class PendingOrderComponent implements OnInit {
  @Input() detailOrder!: OrderData;

  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    console.log('');
  }

  sendToPreparation() {
    this.firestore.updateStatusCurrentOrder({ status: 2 }, this.detailOrder.table);
  }
}
