import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantitydropdown',
  templateUrl: './quantitydropdown.component.html',
  styleUrls: ['./quantitydropdown.component.scss']
})
export class QuantitydropdownComponent implements OnInit {
quantityList=[1,2];
  constructor() { }

  ngOnInit() {
  }

}
