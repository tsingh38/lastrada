import { Component, OnInit, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from './cart.service';
import { PizzaAdditions } from '../pizzaAdditions.model';
import { PizzaUnit } from '../pizzaunit.model';
import { ItemOrder } from '../itemorder.model';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  orderedItems: ItemOrder[] = [];
  showEmptyShoppingCart: boolean = this.orderedItems.length <= 1;
  totalSum = 0;
  deliveryCharges = 2;
  OrderSum = 0;
  orderCannotBeDelivered = false;
  constructor(private cartService: CartService) { }
  //help methode



  printOrderItems() {
    var orderItem: String = "";
    for (let item of this.orderedItems) {
      orderItem += " item id ->" + item.id + " item name ->" + item.name + " quantity ->" + item.quantity + " pizza auswahl" + item.size + " pizza Total Preis" + item.totalPrice;
      console.log("item in Order ->" + orderItem);
    }
  }
  ngOnInit() {

    this.cartService.pizzaOrderEmitter.subscribe(params => {
      var recievedItem: ItemOrder;
      if (params) {
        recievedItem = new ItemOrder(params.id, params.pizza, params.name, params.size, params.listOfAdditions, params.quantity, params.totalPrice);
        this.addItemToOrder(recievedItem);
      } else {
        this.orderedItems = [];
      }
      this.triggerPriceCalculation();
    });

    this.cartService.priceCalculationEmitter.subscribe((params => {
      this.triggerPriceCalculation();
    }));
  }

  ngOnDestroy() {
    this.cartService.pizzaOrderEmitter.unsubscribe();
  }
  triggerPriceCalculation() {
    this.cartService.triggerCalculationsInCart(this.orderedItems);
    this.totalSum = 0;
    for (let currentItemInOrder of this.orderedItems) {
      this.totalSum = Number(this.totalSum) + Number(currentItemInOrder.totalPrice);
    }
    this.orderCannotBeDelivered = this.totalSum < 15 ? true : false;
    if (this.orderCannotBeDelivered) {
      this.OrderSum = this.totalSum;
    } else {
      this.OrderSum = this.totalSum + this.deliveryCharges;
    }
  }
  checkAdditionsInBothOrdersEqual(existingOrder: ItemOrder, newOrder: ItemOrder) {

    if((existingOrder.listOfAdditions.length < 1 && newOrder.listOfAdditions.length < 1)){
      return true;
    }

    if (existingOrder.listOfAdditions.length  !== newOrder.listOfAdditions.length ) {
      return false;
    
    }
    var matchFound: boolean = false;
   
      if (existingOrder.listOfAdditions.length === newOrder.listOfAdditions.length) {
        for (let currentAdditionInExistingOrder of existingOrder.listOfAdditions) {
         
          for (let currentAdditionInNewOrder of newOrder.listOfAdditions) {
            if (currentAdditionInExistingOrder.id == currentAdditionInNewOrder.id) {
              matchFound = true;
            }else{
              matchFound=false;
            }
          }
          if (!matchFound) {
            return false;
          }
        }
      }
    
    return matchFound;

  }

  addItemToOrder(order: ItemOrder) {

    if (this.orderedItems.length < 1) {
      this.orderedItems.push(order);
    }
    else {
      for (let currentExistingOrder of this.orderedItems) {
        if (currentExistingOrder.id !== order.id){
          this.orderedItems.push(order);
          break;
        }
       else if (currentExistingOrder.id === order.id){
           if(currentExistingOrder.size=== order.size  && this.checkAdditionsInBothOrdersEqual(currentExistingOrder, order)) {
            currentExistingOrder.quantity = Number(currentExistingOrder.quantity) + Number(order.quantity);
            currentExistingOrder.totalPrice = Number(currentExistingOrder.totalPrice) + Number(order.totalPrice);
            break; 
          }
          else {
            this.orderedItems.push(order);
            break;
          }
        } 
      }
    }
  }


  getOderAdditionsText(indexx: string): String {
   var existAdditionsInItem:boolean=this.orderedItems[indexx].listOfAdditions > 0;

    var orderItemText: string = existAdditionsInItem ? "mit(":"";
    for (let pizzaAddition of this.orderedItems[indexx].listOfAdditions) {
      orderItemText += " " + pizzaAddition.nameOfAddition;
    }
    orderItemText += existAdditionsInItem ? ")":"";

    return orderItemText;
  }

  increaseQuantity(orderItem: ItemOrder) {
    orderItem.quantity = +orderItem.quantity + 1;
    orderItem.totalPrice = Number((+orderItem.totalPrice * 2).toFixed(2));
    this.cartService.priceCalculationEmitter.next(orderItem);
  }
  decreaseQuantity(orderItem: ItemOrder) {
    if (orderItem.quantity > 1) {
      orderItem.quantity = +orderItem.quantity - 1;
      orderItem.totalPrice = Number((+orderItem.totalPrice / 2).toFixed(2));
    }
    this.cartService.priceCalculationEmitter.next(orderItem);
  }
  deleteTheItemFromOrder(orderItem: ItemOrder) {
        this.orderedItems.splice(this.orderedItems.indexOf(orderItem), 1);
        this.cartService.priceCalculationEmitter.next(orderItem);
      
    
  }



}
