import { Component, Input, OnInit } from '@angular/core';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-order-in-preparation',
  templateUrl: './order-in-preparation.component.html',
  styleUrls: ['./order-in-preparation.component.css']
})
export class OrderInPreparationComponent implements OnInit {
@Input() dataOrder!: OrderData;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log("");
    
  }

}
