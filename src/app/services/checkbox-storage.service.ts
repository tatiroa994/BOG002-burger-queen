import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckboxStorageService {
  // interface prueba
  storage: object = {
    1: [],
    2: [],
    3: [],
    4: [],
  };

  constructor() {
    this.addCheckboxes(1, 2)
  }

  addCheckboxes(tableId: number, index: number) {
    this.storage[tableId].push(index);
  }
}
