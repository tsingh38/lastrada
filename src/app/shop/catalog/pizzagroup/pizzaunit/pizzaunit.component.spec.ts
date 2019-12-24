import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaunitComponent } from './pizzaunit.component';

describe('PizzaunitComponent', () => {
  let component: PizzaunitComponent;
  let fixture: ComponentFixture<PizzaunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
