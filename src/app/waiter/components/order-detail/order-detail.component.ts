import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from 'src/app/services/addProduct/add-product.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { OrderBd, OrderData, OrderDataEdit, StatusOrder } from 'src/app/shared/models/order-bd.model';

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
  table: string = '';
  valueClient!: string;
  valueWaiter!: string;
  statusText!: string;
  statusColor!: string;
  urlImgStatus!: string;
  textBtn!: string;
  disableItem!: boolean;
  constructor(
    private _addProduct: AddProductService,
    private _firestore: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.products = [];
    this.pricesOrder = [];
    this.valueClient = '';
    this.valueWaiter = '';
    this.statusText = 'nuevo';
    this.urlImgStatus = '../../../../assets/new_icon.png';
    this.textBtn = 'Ordenar';
    this.disableItem = false;
  }

  ngOnInit(): void {
    this._addProduct.getItem().subscribe((data) => {
      data.options = this.removeEmpty(data.options);
      this.pricesOrder.push(data.price * data.quantity);
      this.products.push(data);
      this.getTotalOrder();
    });

    this.table = String(this.route.snapshot.paramMap.get('id'));
    this.getOrderCurrent(this.table);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.pricesOrder.splice(index, 1);
    this.getTotalOrder();
  }

  updateProps(cant: number, index: number) {
    this.pricesOrder[index] = cant * this.products[index].price;
    this.products[index].quantity = cant;
    this.getTotalOrder();
  }

  getTotalOrder() {
    this.totalOrder = this.pricesOrder.reduce((a, b) => a + b, 0);
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
      table: this.table,
    };
    this._firestore.updateOrder(this.table, orderData);
    this.router.navigate(['/waiter']);
  }

  saveClient(client: string) {
    this.clientOrder = client;
  }

  saveWaiter(waiter: string) {
    this.waiterOrder = waiter;
  }

  getOrderCurrent(idTable: string) {
    this._firestore.getActiveOrder(idTable).subscribe((data) => {
      const dataAs = data as OrderData;
      if (dataAs.table) {
        this.valueClient = dataAs.client;
        this.valueWaiter = dataAs.waiter;
        this.statusText = this.getStatusText(dataAs.status);
        this.products = dataAs.products;
        this.totalOrder = dataAs['total-order'];
        dataAs.products.forEach((element) => {
          this.pricesOrder.push(element.price * element.quantity);
        });
        this.disableItemOrder(dataAs.status, dataAs.products.length);
      }
      this.placeHolderBtn();
    });
  }

  getStatusText(status: number): string {
    switch (status) {
      case 1:
        this.statusText = 'Enviado cocina';
        this.statusColor = 'status-green';
        this.urlImgStatus = '../../../../assets/send_icon.png';
        break;
      case 2:
        this.statusText = 'En preparación';
        this.statusColor = 'status-red';
        this.urlImgStatus = '../../../../assets/block_icon.png';

        break;
      case 4:
        this.statusText = 'Servido en mesa';
        this.statusColor = 'status-white';
        this.urlImgStatus = '../../../../assets/server_icon.png';
        break;
      default:
        this.statusText = 'Nuevo';
        this.urlImgStatus = '../../../../assets/new_icon.png';
        console.log('en  default');
        break;
    }
    return this.statusText;
  }

  updateOrderCurrent() {
    const data: OrderDataEdit = {
      products: this.products,
      'total-order': this.totalOrder,
    };
    this._firestore.updateOrderActive(this.table, data);
    this.router.navigate(['/waiter']);
  }

  onClickOrder() {
    if (this.statusText === 'Enviado cocina' || this.statusText === 'En preparación') {
      this.updateOrderCurrent();
    } else {
      this.sendOrder();
    }
  }
  placeHolderBtn() {
    if (this.statusText === 'Enviado cocina' || this.statusText === 'En preparación') {
      this.textBtn = 'Editar';
    } else {
      this.textBtn = 'Ordenar';
    }
  }

  disableItemOrder(status: number, lengthProduct:number) {
    if ((status === 2)) {
      let i = 0;
     
      while (i < lengthProduct) {            
        this.disableItem = true;
        console.log(this.disableItem);
        i++;
      }
      
    }
  }
}
