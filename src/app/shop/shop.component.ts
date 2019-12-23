import { Component, OnInit } from '@angular/core';
import { PizzaService } from './catalog/pizza.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers:[PizzaService]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
