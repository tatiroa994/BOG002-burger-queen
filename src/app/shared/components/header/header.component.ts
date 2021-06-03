import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  pathCurrent: string = location.pathname;
  isWaiter: boolean =
    this.pathCurrent.includes('waiter') || this.pathCurrent.includes('kitchen');

  constructor(private router: Router) {}
  
  toHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {}
}
