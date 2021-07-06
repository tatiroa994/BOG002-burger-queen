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
import { ModalOptionsComponent } from './components/modal-options/modal-options.component';
import { QuantityControlComponent } from './components/quantity-control/quantity-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ModalOptionsComponent,
    QuantityControlComponent,
    
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, WaiterRoutingModule],
})
export class WaiterModule {}
