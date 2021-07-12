import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { DataUpdate } from 'src/app/shared/models/order-bd.model';

import { PendingOrderComponent } from './pending-order.component';

const mockOrdersPending = {
  client: 'Aleja',
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
  'lead-time': '',
};

class MockFirestore {
  public updateStatusCurrentOrder(data: DataUpdate, idTable: string) {
    return mockOrdersPending.status= data.status;
  }
}
describe('PendingOrderComponent', () => {
  let component: PendingOrderComponent;
  let fixture: ComponentFixture<PendingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PendingOrderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrderComponent);
    component = fixture.componentInstance;
    component.detailOrder = mockOrdersPending;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
