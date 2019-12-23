import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalatgroupComponent } from './salatgroup.component';

describe('SalatgroupComponent', () => {
  let component: SalatgroupComponent;
  let fixture: ComponentFixture<SalatgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalatgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalatgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
