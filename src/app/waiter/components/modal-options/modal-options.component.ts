import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css'],
})
export class ModalOptionsComponent implements OnChanges {
  @Input() product: string;
  @Input () isVisible: boolean;

  constructor() {
    this.product = Input();
    this.isVisible = false;
  }
  
  ngOnChanges(changes: SimpleChanges) {
console.log(changes.isVisible.currentValue);
  }

  closeModal() {
    this.isVisible = false;
    // console.log(this.isVisible);
  }
}
