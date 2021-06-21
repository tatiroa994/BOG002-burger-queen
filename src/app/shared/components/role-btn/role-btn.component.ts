import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-role-btn',
  templateUrl: './role-btn.component.html',
  styleUrls: ['./role-btn.component.css'],
})
export class RoleBtnComponent {
  @Input() urlImg: string;
  @Input() role: string | undefined;
  constructor() {
    this.urlImg = Input();
  }
}
