import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    this.idTable = Input();
  }
  ngOnInit(): void {
    this.printStatus();
  }

  showOptions() {
    this.showMenu = !this.showMenu;
  }

  printStatus() {
    // const statusDefault = 'Mesa libre';
    // const statusOption = {
    //   1: 'Enviado cocina',
    //   2: 'En preparacion',
    //   3: 'Para entregar',
    //   4: 'En mesa',
    // };
    // this.statusText = statusOption[this.statusOrder] || statusDefault;

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
}
