import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  pathCurrent: string = location.pathname;
  isNotHome: boolean = !this.pathCurrent.includes('home');

  constructor(private router: Router) {}

  toHome() {
    this.router.navigate(['/home']);
  }
}
