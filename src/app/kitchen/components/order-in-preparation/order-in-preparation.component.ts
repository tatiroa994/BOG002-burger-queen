import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { CheckboxStorageService } from 'src/app/services/checkbox-storage.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
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
  isVisible!: boolean;
  storageCheckbox!: any;

  constructor(private firestore: FirestoreService, private storageCheck: CheckboxStorageService) {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      multiple: new FormArray([]),
    });
    this.storageCheckbox = this.storageCheck.getStorage();
    this.activeBtn(+this.dataOrder.table);
  }

  validateCheckbox(event: Event, idTable: string) {
    const checkArray: FormArray = this.form.get('multiple') as FormArray;
    const checkboxElement = event.target as HTMLInputElement;
    if (checkboxElement.checked) {
      checkArray.push(new FormControl(checkboxElement.value));
      this.storageCheck.addCheckboxes(+idTable, +checkboxElement.id);
    } else {
      checkArray.controls.forEach((item: AbstractControl, index: number) => {
        if (item.value == checkboxElement.value) {
          checkArray.removeAt(index);
          this.storageCheck.removeCheckboxes(+idTable, +checkboxElement.id);
          return;
        }
      });
    }
    this.activeBtn(+idTable);
  }

  //activa el  boton de entregar
  activeBtn(idTable: number):void {
    const lengthStorage = this.storageCheckbox[idTable].length;
    const lengthProducts = this.dataOrder.products.length;
    if (lengthStorage === lengthProducts) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  getLeadTime(timeStamp: number):void {
    const initialDate = new Date(timeStamp);
    const finalDate = new Date();
    //calcular la direncia entre la finalizacion del pedido y la hora de inicio
    const difference = finalDate.getTime() - initialDate.getTime();
    // conversión de milisegundos a hora
    const hours = Math.floor(difference / (1000 * 3600));
    // calcular minutos
    const minutes = Math.ceil((hours - Math.floor(hours)) * 60);
    this.timeTotal = ` ${hours} hora  ${minutes} minutos `;
  }

  sendToTable():void {
    this.getLeadTime(this.dataOrder['date-hour']);
    this.firestore.updateStatusCurrentOrder({ status: 3, 'lead-time': this.timeTotal }, this.dataOrder.table);
    this.storageCheck.cleanCheckbox(+this.dataOrder.table);
  }
}
