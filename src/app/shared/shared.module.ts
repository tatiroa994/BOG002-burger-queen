import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RoleBtnComponent } from './components/role-btn/role-btn.component';
import { ButtomComponent } from './components/buttom/buttom.component';

@NgModule({
  declarations: [HeaderComponent, RoleBtnComponent, ButtomComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, RoleBtnComponent, ButtomComponent],
  
})
export class SharedModule {}
