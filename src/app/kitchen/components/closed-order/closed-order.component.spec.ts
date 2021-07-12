import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClosedOrderComponent } from './closed-order.component';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pipename'})
class Capitalize implements PipeTransform {
  transform(value: string) {
    if (value) {
      const arrNames = value.split(' ');
      const newArrName = arrNames.map((element) =>
        element.trim() === '' ? '' : element[0].toUpperCase() + element.substr(1));
      return newArrName.join(' ');
    }
    return value;
  }
}

const mockOrdersClosed = {
  client: 'aleja peréz',
  products: [
    {
      item: 'cafe con leche',
      options: ['leche entera'],
      price: 7,
      quantity: 1,
    },
  ],
  status: 1,
  'total-order': 15,
  waiter: '001',
  'date-hour': 1625701847149,
  table: '1',
  'lead-time': '0 hora 1 minutos ',
};

fdescribe('ClosedOrderComponent', () => {
  let component: ClosedOrderComponent;
  let fixture: ComponentFixture<ClosedOrderComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ClosedOrderComponent],
  //   }).compileComponents();

  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedOrderComponent);
    TestBed.configureTestingModule({
      declarations: [ClosedOrderComponent, Capitalize],
     
    }).compileComponents();
    component = fixture.componentInstance;
    component.dataOrder = mockOrdersClosed;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
