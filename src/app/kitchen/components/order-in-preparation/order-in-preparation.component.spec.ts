import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInPreparationComponent } from './order-in-preparation.component';

describe('OrderInPreparationComponent', () => {
  let component: OrderInPreparationComponent;
  let fixture: ComponentFixture<OrderInPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInPreparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
