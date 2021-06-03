import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OrdersComponent,
    KitchenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    KitchenRoutingModule,
  ]
})
export class KitchenModule { }
