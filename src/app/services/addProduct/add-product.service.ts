import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderBd } from 'src/app/shared/models/order-bd.model';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  private addProductSubject = new Subject<OrderBd>();
  public addProduct$ = this.addProductSubject.asObservable();
prueba!: OrderBd
  constructor() {}

  addItem(item: OrderBd) {
    this.addProductSubject.next(item);
    this.prueba=item
  }

  getItem() {
    return this.addProduct$;
  }
}
