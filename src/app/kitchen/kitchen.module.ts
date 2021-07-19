import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { SharedModule } from '../shared/shared.module';
import { RecordsComponent } from './components/records/records.component';
import { PendingOrderComponent } from './components/pending-order/pending-order.component';
import { OrderInPreparationComponent } from './components/order-in-preparation/order-in-preparation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClosedOrderComponent } from './components/closed-order/closed-order.component';

@NgModule({
  declarations: [
    OrdersComponent,
    KitchenComponent,
    RecordsComponent,
    PendingOrderComponent,
    OrderInPreparationComponent,
    ClosedOrderComponent,
  ],
  imports: [CommonModule, SharedModule, KitchenRoutingModule, ReactiveFormsModule, FormsModule],
})
export class KitchenModule {}
