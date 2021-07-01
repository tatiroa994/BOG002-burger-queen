import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Component({
  selector: 'app-order-in-preparation',
  templateUrl: './order-in-preparation.component.html',
  styleUrls: ['./order-in-preparation.component.css'],
})
export class OrderInPreparationComponent implements OnInit {
  @Input() dataOrder!: OrderData;
  timeTotal!: string;
  form!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      multiple: new FormArray([]),
    });
  }

  validateCheckbox(event: Event, idTable:string) {
    const checkArray: FormArray = this.form.get('multiple') as FormArray;
    const checkboxElement = event.target as HTMLInputElement;
    // console.log(checkArray);
    console.log(checkboxElement.checked);
    if (checkboxElement.checked) {
      checkArray.push(new FormControl(checkboxElement.value));
      localStorage.setItem('table', idTable);
      localStorage.setItem( 'item', checkboxElement.value)
      console.log(localStorage);
      
    } else {
      checkArray.controls.forEach((item: AbstractControl, index: number) => {
        if (item.value == checkboxElement.value) {
          checkArray.removeAt(index);
          return;
        }
      });
    }
    console.log(checkArray.controls);
  }

  getLeadTime(timeStamp: number) {
    const day1 = new Date(timeStamp);
    const day2 = new Date();
    const difference = day2.getTime() - day1.getTime();
    const days = difference / (1000 * 3600);
    const horas = Math.floor(days);
    const minutos = Math.abs(days); // Change to positive
    var minutoPositivo = Math.ceil((minutos - Math.floor(minutos)) * 60);
    this.timeTotal = ` ${horas} hora  ${minutoPositivo} minutos `;
    console.log(this.timeTotal);
  }
}
