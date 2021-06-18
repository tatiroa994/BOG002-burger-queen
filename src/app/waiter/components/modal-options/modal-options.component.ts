import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { AddProductService } from 'src/app/services/addProduct/add-product.service';
import { MenuItem, Option } from '../../../shared/models/menu-item.model';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css'],
})
export class ModalOptionsComponent implements OnInit {
  quantity: number;
  @Input() product!: MenuItem;
  @Output() closeChange = new EventEmitter<boolean>();
  optionsProduct!: Option;
  form!: FormGroup;

  constructor(private _addProduct: AddProductService) {
    this.quantity = 1;
  }

  private getUniqueOption(options: Option) {
    return options.unique ? options.unique[0] : '';
  }

  ngOnInit() {
    this.optionsProduct = this.product.options;
    this.form = new FormGroup({
      unique: new FormControl(this.getUniqueOption(this.optionsProduct)),
      multiple: new FormArray([]),
    });
  }

  closeModal() {
    this.closeChange.emit(false);
  }

  addItem() {
    const arrMultiple = this.form.value.multiple;
    const optUnique = this.form.value.unique;

    const product = {
      item: this.product.item,
      price: +this.product.price,
      options: [optUnique, ...arrMultiple],
      quantity: this.quantity,
    };

    this._addProduct.addItem(product);
    this.closeModal();
  }

  getCant(cantProduct: number) {
    this.quantity = cantProduct;
  }

  onCheckboxChange(event: Event) {
    const checkArray: FormArray = this.form.get('multiple') as FormArray;
    const checkboxElement = event.target as HTMLInputElement;

    if (checkboxElement.checked) {
      checkArray.push(new FormControl(checkboxElement.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == checkboxElement.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
