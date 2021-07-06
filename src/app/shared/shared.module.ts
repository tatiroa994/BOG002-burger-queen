import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RoleBtnComponent } from './components/role-btn/role-btn.component';
import { ButtomComponent } from './components/buttom/buttom.component';
import { Capitalize } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [HeaderComponent, RoleBtnComponent, ButtomComponent,Capitalize,],
  imports: [CommonModule],
  exports: [HeaderComponent, RoleBtnComponent, ButtomComponent,Capitalize,],
  
})
export class SharedModule {}
