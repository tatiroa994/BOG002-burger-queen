import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() imgProduct: string;
  @Input() product: string;
  @Input() price: string;
  


  constructor() {
    this.imgProduct = Input();
    this.product = Input();
    this.price = Input();
    

  }

  ngOnInit(): void {
  }
}
