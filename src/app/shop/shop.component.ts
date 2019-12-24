import { Component, OnInit } from '@angular/core';
import { PizzaGroupService } from './catalog/pizzagroup.service';
import { PizzaUnitService } from './catalog/pizzaunitservice';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers:[PizzaGroupService,PizzaUnitService]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
