import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit, OnDestroy {
  allOrders!: OrderData[];
  sub!: Subscription;
  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.sub = this.firestore.getAllOrder().subscribe((data) => {
      this.allOrders = data as OrderData[];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
