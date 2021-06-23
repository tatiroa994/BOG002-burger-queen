import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  idItems: OrderData[];
  constructor(private firestore: FirestoreService) {
    this.idItems = [];
  }
  ngOnInit(): void {
    this.firestore.getActiveOrder().subscribe((data) => {
      // console.log(data);
      this.idItems = [];
      data.forEach((element: any) => {
        this.idItems.push({...element, idTable: element.id})
         console.log(element.id);
        
        
      });
      console.log(this.idItems);
    });
  }
}
