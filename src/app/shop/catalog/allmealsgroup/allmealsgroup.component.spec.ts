import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmealsgroupComponent } from './allmealsgroup.component';

describe('AllmealsgroupComponent', () => {
  let component: AllmealsgroupComponent;
  let fixture: ComponentFixture<AllmealsgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmealsgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmealsgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
