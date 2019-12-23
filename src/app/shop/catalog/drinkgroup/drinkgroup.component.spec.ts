import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkgroupComponent } from './drinkgroup.component';

describe('DrinkgroupComponent', () => {
  let component: DrinkgroupComponent;
  let fixture: ComponentFixture<DrinkgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
