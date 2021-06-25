import { Component, OnInit } from '@angular/core';
import { CurrentOrderService } from 'src/app/services/current-order/current-order.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  items: OrderData[];
  constructor(private firestore: FirestoreService) {
    this.items = [];
  }
  ngOnInit(): void {
    this.firestore.getActiveOrders().subscribe((data) => {
      this.items = [];
      data.forEach((element: any) => {
        this.items.push(element);
      });
    });
  }
}
