import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit, OnDestroy {
  items: OrderData[];
  sub!: Subscription;
  constructor(private firestore: FirestoreService) {
    this.items = [];
  }
  ngOnInit(): void {
    this.sub = this.firestore.getActiveOrders().subscribe((data) => {
      this.items = [];
      data.forEach((element: any) => {
        this.items.push(element);
      });
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
