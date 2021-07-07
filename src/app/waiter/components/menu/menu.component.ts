import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { MenuItem } from '../../../shared/models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, OnDestroy {
  public isVisible: boolean;
  public isType: string;
  dataMenu: MenuItem[];
  showModal: boolean;
  productSelect!: MenuItem;
  sub1!: Subscription;
  sub2!: Subscription;
  constructor(private firestoreService: FirestoreService) {
    this.isVisible = false;
    this.isType = 'burger';
    this.dataMenu = [];
    this.showModal = false;
  }

  ngOnInit() {
    console.log('init');

    this.getMenuBreakfast();
  }

  showMenu(option: string): void {
    if (option === 'breakFast') {
      this.isVisible = false;
      this.getMenuBreakfast();
    } else {
      this.isVisible = true;
      this.getMenuLunch('burguer');
    }
  }

  getMenuBreakfast() {
    this.dataMenu = [];
    this.sub1 = this.firestoreService.getMenu('menu_breakfast').subscribe((result) => {
      result.forEach((element: any) => {
        this.dataMenu.push(element.data());
      });
    });
  }

  getMenuLunch(campo: string) {
    this.dataMenu = [];
    this.isType = campo;

    this.sub2 = this.firestoreService.getMenuByType('menu_lunch_dinner', campo).subscribe((result) => {
      result.forEach((element: any) => {
        this.dataMenu.push(element);
      });
    });
    console.log(this.sub2);
  }

  modalOpen(item: MenuItem): void {
    this.showModal = true;
    this.productSelect = item;
  }

  ngOnDestroy() {
    console.log('destroy');
    this.sub1.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
