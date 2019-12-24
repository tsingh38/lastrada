import { Component, OnInit } from '@angular/core';
import { PizzaGroupService } from './catalog/pizzagroup.service';
import { PizzaUnitService } from './catalog/pizzaunitservice';
import { CartService } from './catalog/cart/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers:[PizzaGroupService,PizzaUnitService,CartService]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
