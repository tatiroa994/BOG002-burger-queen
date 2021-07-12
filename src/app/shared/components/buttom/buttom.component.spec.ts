import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomComponent } from './buttom.component';

const mockText= "Ordenar";
const mockBtnType= "btn-primary";
describe('ButtomComponent', () => {
  let component: ButtomComponent;
  let fixture: ComponentFixture<ButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomComponent);
    component = fixture.componentInstance;
    component.btnType=mockBtnType;
    component.text=mockText;
    fixture.detectChanges();
  });

  it('should create button', () => {
    expect(component).toBeTruthy();
  });
  it('should display text button', () => {
    expect(component.text).toBe("Ordenar");
  });
});
