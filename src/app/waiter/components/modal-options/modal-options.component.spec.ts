import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductService } from 'src/app/services/addProduct/add-product.service';
import { OrderBd } from 'src/app/shared/models/order-bd.model';
import { ModalOptionsComponent } from './modal-options.component';

const productMock = {
  item: 'Hambuerguesa doble',
  price: 15,
  url_img:
    'https://firebasestorage.googleapis.com/v0/b/burguer-queen-77d39.appspot.com/o/burguer_doble.jpg?alt=media&token=5a71f33b-2e18-44bc-876b-fde259535160',
  options: {
    multiples: ['sin queso', 'sin cebolla'],
    unique: ['carne de res', 'pollo'],
  },
};


class MockAddProductService extends AddProductService {
  addItem(item: OrderBd) {}
}

describe('ModalOptionsComponent', () => {
  let component: ModalOptionsComponent;
  let fixture: ComponentFixture<ModalOptionsComponent>;
  let testBedService: MockAddProductService;
  let componentService: MockAddProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalOptionsComponent],
      providers: [MockAddProductService],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.overrideComponent(ModalOptionsComponent, {
      set: { providers: [{ provide: AddProductService, useClass: MockAddProductService }] },
    });
    fixture = TestBed.createComponent(ModalOptionsComponent);
    component = fixture.componentInstance;
    // AuthService provided to the TestBed
    testBedService = TestBed.get(MockAddProductService);

    // AuthService provided by Component, (should return MockAuthService)
    componentService = fixture.debugElement.injector.get(MockAddProductService);

    component.product = productMock;

    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via component should be and instance of MockAuthService', () => {
    expect(componentService instanceof MockAddProductService).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form).toBeDefined();
    expect(component.optionsProduct).toBeDefined();
  });
});
