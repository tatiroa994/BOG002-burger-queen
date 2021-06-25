import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderBd } from 'src/app/shared/models/order-bd.model';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  private addProductSubject = new Subject<OrderBd>();
  public addProduct$ = this.addProductSubject.asObservable();

  constructor() {}

  addItem(item: OrderBd) {
    this.addProductSubject.next(item);
  }

  getItem() {
    return this.addProduct$;
  }
}
