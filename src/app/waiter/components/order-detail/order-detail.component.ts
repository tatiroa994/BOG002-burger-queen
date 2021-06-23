import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from 'src/app/services/addProduct/add-product.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderBd } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  priceTotal!: number;
  products: OrderBd[];
  pricesOrder: number[];
  totalOrder!: number;
  clientOrder!: string;
  waiterOrder!: string;
  table: number =1;
  constructor(private _addProduct: AddProductService, private _firestore: FirestoreService, private router: Router) {
    this.products = [];
    this.pricesOrder = [];
  }

  ngOnInit(): void {
    this._addProduct.getItem().subscribe((data) => {
      data.options = this.removeEmpty(data.options);
      this.pricesOrder.push(data.price * data.quantity);
      this.products.push(data);
      this.getTotalOrder();
    });
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.pricesOrder.splice(index, 1);
    this.getTotalOrder();
  }

  updateProps(cant: number, index: number) {
    this.pricesOrder[index] = cant * this.products[index].price;
    this.products[index].quantity = cant;
    console.log(this.pricesOrder);
    this.getTotalOrder();
  }

  getTotalOrder() {
    this.totalOrder = this.pricesOrder.reduce((a, b) => a + b,0);
  }

  removeEmpty(arr: string[]) {
    if (arr[0] === '') {
      arr.shift();
    }
    return arr;
  }

  sendOrder() {
    const orderData = {
      client: this.clientOrder,
      products: this.products,
      status: 1,
      'total-order': this.totalOrder,
      waiter: this.waiterOrder,
      'date-hour': new Date(),
      table: 1,
      idTable: 1,
    };
    this._firestore.createOrder(orderData);
    this.router.navigate(['/waiter']);
  }

  saveClient(client: string) {
    this.clientOrder = client;
  }

  saveWaiter(waiter: string) {
    this.waiterOrder = waiter;
  }
}
