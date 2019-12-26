import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaAdditions } from '../pizzaAdditions.model';
import { PizzaUnitService } from '../pizzaunitservice';
import { PizzaUnit } from '../pizzaunit.model';
import { ItemOrder } from '../itemorder.model';


@Injectable()
export class CartService{

    pizzaOrderEmitter=new Subject<ItemOrder>();
    priceCalculationEmitter=new Subject<ItemOrder>();

constructor(){

 }


 triggerCalculationsInCart(allOrderItems:ItemOrder[] ){
for(let currentOrderItem of allOrderItems){
    currentOrderItem.totalPrice= this.calculateTotalPriceForAUnit(currentOrderItem.pizza,currentOrderItem.size,currentOrderItem.listOfAdditions,currentOrderItem.quantity);
    }
 }


 calculateTotalPriceForAUnit(selectedPizza: PizzaUnit, selectedPizzaSize: String, listOfCheckedPizzaAdditions: PizzaAdditions[], quantity: Number) {
    var calculatedPrice:Number = 0;
    switch (selectedPizzaSize) {
        case 'Small 26': calculatedPrice = selectedPizza.pizzaPriceS;
            break;
        case 'Normal 28': calculatedPrice = selectedPizza.pizzaPriceN;
            break;
        case 'Family 32': calculatedPrice = selectedPizza.pizzaPriceF;
            break;
        case 'Party 38': calculatedPrice = selectedPizza.pizzaPriceP;
            break;
    }
    calculatedPrice = Number(calculatedPrice) * Number(quantity);

    var pizzaBaseAdditionPrice = 0;
    for (let currentPizzaAddition of listOfCheckedPizzaAdditions) {
        switch (selectedPizzaSize) {
            case 'Small 26': pizzaBaseAdditionPrice = pizzaBaseAdditionPrice + +Number(Number(currentPizzaAddition.priceS) * Number(quantity)).toFixed(2);
                break;
            case 'Normal 28': pizzaBaseAdditionPrice = pizzaBaseAdditionPrice + +Number(Number(currentPizzaAddition.priceN) * Number(quantity)).toFixed(2);
                break;
            case 'Family 32': pizzaBaseAdditionPrice = pizzaBaseAdditionPrice + +Number(Number(currentPizzaAddition.priceF) * Number(quantity)).toFixed(2);
                break;
            case 'Party 38': pizzaBaseAdditionPrice = pizzaBaseAdditionPrice + +Number(Number(currentPizzaAddition.priceP) * Number(quantity)).toFixed(2);
                break;
        }
    }
    calculatedPrice = +calculatedPrice + pizzaBaseAdditionPrice;

    return calculatedPrice;
}



 
}