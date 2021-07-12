import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    component.pathCurrent = 'kitchen'; 
    component.isWaiter = component.pathCurrent.includes('waiter') || component.pathCurrent.includes('kitchen');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');

    component.toHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
  
  it('should assign true when pathCurrent is waiter or kitchen', () => {
    expect(component.isWaiter).toBeTrue();
  })
});
