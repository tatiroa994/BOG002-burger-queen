import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './components/tables/tables.component';
import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './components/waiter/waiter.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { OrderComponent } from './components/order/order.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { ItemOrderComponent } from './components/item-order/item-order.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';

@NgModule({
  declarations: [
    TablesComponent,
    WaiterComponent,
    TableComponent,
    OrderComponent,
    MenuComponent,
    OrderDetailComponent,
    ItemOrderComponent,
    CardItemComponent,
    OrderInfoComponent,
  ],
  imports: [CommonModule, WaiterRoutingModule, SharedModule],
})
export class WaiterModule {}
