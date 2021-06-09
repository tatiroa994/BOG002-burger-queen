import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
@Input() status: string | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
