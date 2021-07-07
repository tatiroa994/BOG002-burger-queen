import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() idTable: number;
  @Input() statusOrder!: number;
  showMenu: boolean = false;
  statusText!: string;
  statusColor!: string;
  popupOpen!: boolean;
  dataOrder!: OrderData;
  sub!: Subscription;
  constructor(private router: Router, private firestore: FirestoreService) {
    this.idTable = Input();
    this.popupOpen = false;
  }
  ngOnInit(): void {
    this.printStatus();
  }

  showOptions() {
    this.showMenu = !this.showMenu;
  }

  printStatus() {
    switch (this.statusOrder) {
      case 1:
        this.statusText = 'Enviado';
        this.statusColor = 'table-kitchen';
        break;
      case 2:
        this.statusText = 'Cocina';
        this.statusColor = 'table-kitchen';
        break;
      case 3:
        this.statusText = 'Listo';
        this.statusColor = 'table-toDeliver';
        break;
      case 4:
        this.statusText = 'Servido';
        this.statusColor = 'table-served';
        break;
      default:
        this.statusText = 'Libre';
        this.statusColor = 'table-free';
        break;
    }
  }

  sendingIndex() {
    this.router.navigate([`/waiter/order/${this.idTable}`]);
  }

  deliverOrder() {
    this.firestore.updateStatusCurrentOrder({ status: 4 }, this.idTable.toString());
  }

  openPopup() {
    this.popupOpen = true;
    this.sub = this.firestore.getActiveOrder(this.idTable.toString()).subscribe((data) => {
      this.dataOrder = data as OrderData;
    });
  }

  finishOrder() {
    this.popupOpen = false;
    this.firestore.createOrder(this.dataOrder);
    this.firestore.setOrderActive(this.idTable.toString(), {});
  }

  
}
