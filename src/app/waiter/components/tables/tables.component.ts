import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  constructor() {}
  idItems = [1, 2, 3, 4];
  ngOnInit(): void {}
}
