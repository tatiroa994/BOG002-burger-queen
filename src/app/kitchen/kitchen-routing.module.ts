import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: 'kitchen',
    component: KitchenComponent,

    children: [
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenRoutingModule {}
