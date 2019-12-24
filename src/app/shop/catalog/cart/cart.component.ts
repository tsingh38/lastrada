import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { PizzaAdditions } from '../pizzaAdditions.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orderedItems:{ id: String, name: String, size: String, listOfAdditions: PizzaAdditions[], quantity: Number, totalPrice: Number }[]=[];
  showEmptyShoppingCart:boolean =this.orderedItems.length <= 1; 
  totalSum=0;
  orderCannotBeDelivered=true;
  constructor(private cartService:CartService) { }

  ngOnInit() {

    this.cartService.pizzaOrderEmitter.subscribe(params =>{
    this.orderedItems.push(params);
    console.log(this.orderedItems[0]);
    });
  }

}
