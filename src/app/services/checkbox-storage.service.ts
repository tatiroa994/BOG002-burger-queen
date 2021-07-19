import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class CheckboxStorageService {
  storage: any = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  constructor() {}

  addCheckboxes(tableId: number, index: number) {
    this.storage[tableId].push(index);
  }

  removeCheckboxes(tableId: number, index: number) {
    const indexELement = this.storage[tableId].indexOf(index);
    this.storage[tableId].splice(indexELement, 1);
  }

  cleanCheckbox(tableId: number) {
    this.storage[tableId] = [];
  }

  getStorage() {
    return this.storage;
  }
}
