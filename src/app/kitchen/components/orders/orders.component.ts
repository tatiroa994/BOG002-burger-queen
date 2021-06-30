import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  isVisible!: boolean;
  ordersPending!: OrderData[];
  ordersInPreparation!: OrderData[];

  constructor(private firestore: FirestoreService) {
    this.ordersInPreparation = [];
    this.ordersPending = [];
  }

  ngOnInit(): void {
    this.firestore.getOrdersByStatus(1).subscribe((data) => {
      const dataOrder = data as OrderData[];
      this.ordersPending = dataOrder;
      console.log(this.ordersPending);
      
    });
    this.firestore.getOrdersByStatus(2).subscribe((data) => {
      const dataOrder = data as OrderData[];
      this.ordersInPreparation = dataOrder;
      console.log(this.ordersInPreparation);
      
    });
  }

  showOrdersCurrent() {
    this.isVisible = false;
  }

  showOrdersPreparation() {
    this.isVisible = true;
  }
}
