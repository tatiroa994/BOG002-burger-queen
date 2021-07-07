import { Component, Input } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css'],
})
export class PendingOrderComponent {
  @Input() detailOrder!: OrderData;

  constructor(private firestore: FirestoreService) {}

  sendToPreparation(): void {
    this.firestore.updateStatusCurrentOrder({ status: 2 }, this.detailOrder.table);
  }
}
