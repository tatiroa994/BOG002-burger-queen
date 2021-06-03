import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBtnComponent } from './role-btn.component';

describe('RoleBtnComponent', () => {
  let component: RoleBtnComponent;
  let fixture: ComponentFixture<RoleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
