import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  allOrders!: OrderData[];
  constructor(private firestore: FirestoreService) {
    
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.firestore.getAllOrder().subscribe((data) => {
      this.allOrders = data as OrderData[];
    });
  }
}
