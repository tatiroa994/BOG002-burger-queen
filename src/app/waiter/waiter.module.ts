import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './components/tables/tables.component';
import { WaiterRoutingModule } from './waiter-routing.module';
import { WaiterComponent } from './components/waiter/waiter.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TablesComponent,
    WaiterComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    SharedModule
  ]
})
export class WaiterModule { }
