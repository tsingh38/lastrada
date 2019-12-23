import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzagroupComponent } from './pizzagroup.component';

describe('PizzagroupComponent', () => {
  let component: PizzagroupComponent;
  let fixture: ComponentFixture<PizzagroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzagroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzagroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
