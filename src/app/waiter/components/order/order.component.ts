import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log("init");
    ;
  }
}
