import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndischgroupComponent } from './indischgroup.component';

describe('IndischgroupComponent', () => {
  let component: IndischgroupComponent;
  let fixture: ComponentFixture<IndischgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndischgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndischgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
