import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentOrderService {
  // private currentOrderSubject = new Subject<OrderData>();
  // public currentOrder$ = this.currentOrderSubject.asObservable();
  private _allOrder!: OrderData[];

  constructor() {}

  get allOrder() {
    return this._allOrder;
  }

  set allOrder(order: OrderData[]) {
    this._allOrder = order;
  }

  fetchOrderCurrent(idTable: number) {
    console.log(this._allOrder);
    return this._allOrder[idTable];
  }
}
