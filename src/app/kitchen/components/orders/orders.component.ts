import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  isVisible!: boolean;
  ordersPending!: OrderData[];
  ordersInPreparation!: OrderData[];
  sub1!: Subscription;
  sub2!: Subscription;

  constructor(private firestore: FirestoreService) {
    this.ordersInPreparation = [];
    this.ordersPending = [];
  }

  ngOnInit(): void {
    this.sub1 = this.firestore.getOrdersByStatus(1).subscribe((data) => {
      const dataOrder = data as OrderData[];
      this.ordersPending = dataOrder;
    });
    this.sub2 = this.firestore.getOrdersByStatus(2).subscribe((data) => {
      const dataOrder = data as OrderData[];
      this.ordersInPreparation = dataOrder;
    });
  }

  showOrdersCurrent():void {
    this.isVisible = false;
  }

  showOrdersPreparation():void {
    this.isVisible = true;
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
