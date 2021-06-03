import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RoleBtnComponent } from './components/role-btn/role-btn.component';

@NgModule({
  declarations: [HeaderComponent, RoleBtnComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, RoleBtnComponent],
})
export class SharedModule {}
