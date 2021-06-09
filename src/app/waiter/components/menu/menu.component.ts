import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { menuItem } from './interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public isVisible: boolean;
  public isType: string;
  dataMenu: menuItem[];

  constructor(private firestoreService: FirestoreService) {
    this.isVisible = false;
    this.isType = 'burger';
    this.dataMenu = [];
  }

  ngOnInit() {
    this.getMenuBreakfast();
  }

  showMenu(option: string) {
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
    this.firestoreService.getMenu('menu_breakfast').subscribe((result) => {
      result.forEach((element: any) => {
        this.dataMenu.push(element.data());
      });
    });
  }

  getMenuLunch(campo: string) {
    this.dataMenu = [];
    this.isType = campo;
    console.log(this.isType);
    
    this.firestoreService
      .getMenuByType('menu_lunch_dinner', campo)
      .subscribe((result) => {
        result.forEach((element: any) => {
          this.dataMenu.push(element);
        });
      });
  }
}
