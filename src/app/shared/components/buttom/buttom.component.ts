import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {
  @Input() text: string; 
  @Input() btnType: string;
  constructor() { 
    this.text = Input();
    this.btnType= Input();

  }

  ngOnInit(): void {
  }

}
