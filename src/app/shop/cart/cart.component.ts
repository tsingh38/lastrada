import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shopservices/shopService';
import { ItemInOrder } from '../catalog/ItemInOrder';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderedItems:ItemInOrder[];

  constructor(private shoppingService:ShopService) { 
    console.log("cart component is being called");
  }

  ngOnInit() {
    this.orderedItems=this.shoppingService.getShoppingCartItems();
  }

}
