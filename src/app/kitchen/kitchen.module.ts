import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { SharedModule } from '../shared/shared.module';
import { RecordsComponent } from './components/records/records.component';
import { PendingOrderComponent } from './components/pending-order/pending-order.component';
import { OrderInPreparationComponent } from './components/order-in-preparation/order-in-preparation.component';
@NgModule({
  declarations: [OrdersComponent, KitchenComponent, RecordsComponent, PendingOrderComponent, OrderInPreparationComponent],
  imports: [CommonModule, SharedModule, KitchenRoutingModule],
})
export class KitchenModule {}
