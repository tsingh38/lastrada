import { PizzaSizes } from './Pizzasizes.model';
import { PizzaAdditions } from './pizzaAdditions.model';
import { PizzaUnit } from './pizzaunit.model';
import { CartService } from './cart/cart.service';
import { Injectable } from '@angular/core';
import { ItemOrder } from './itemorder.model';
@Injectable()
export class PizzaUnitService{


    constructor(private cartService: CartService){

    }
    fetchAllPizzaAdditions(): PizzaAdditions[] {
        //TODO use REST to fetchPizza data from Server
        //Mock up
        var allPizzasAdditions: PizzaAdditions[] = [];
        allPizzasAdditions.push(new PizzaAdditions('1', 'Ananas', 'Bio Ananas with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('2', 'knaubloch', 'Bio knaubloch with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('3', 'Ingewer', 'Bio Ingewer with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('4', 'Käse', 'Bio Käse with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('5', 'Broccoli', 'Bio Broccoli with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('2', 'knaubloch', 'Bio knaubloch with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('3', 'Ingewer', 'Bio Ingewer with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('4', 'Käse', 'Bio Käse with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('5', 'Broccoli', 'Bio Broccoli with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('2', 'knaubloch', 'Bio knaubloch with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('3', 'Ingewer', 'Bio Ingewer with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('4', 'Käse', 'Bio Käse with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('5', 'Broccoli', 'Bio Broccoli with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('2', 'knaubloch', 'Bio knaubloch with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('3', 'Ingewer', 'Bio Ingewer with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('4', 'Käse', 'Bio Käse with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('5', 'Broccoli', 'Bio Broccoli with good Quality', 0.50, 1, 1.50, 2));
        allPizzasAdditions.push(new PizzaAdditions('1', 'Ananas', 'Bio Ananas with good Quality', 0.50, 1, 1.50, 2));


        return allPizzasAdditions;
    }


    fetchAllPizzaSizes(): PizzaSizes[] {
        var allPizzaSizes: PizzaSizes[] = [];
        allPizzaSizes.push(new PizzaSizes('S', 'Small 26'));
        allPizzaSizes.push(new PizzaSizes('N', 'Normal 28'));
        allPizzaSizes.push(new PizzaSizes('F', 'Family 32'));
        allPizzaSizes.push(new PizzaSizes('P', 'Party 38'));
        return allPizzaSizes;
    }


    fetchPriceOfAPizzaAdditionsAccordingToSize(selectedSize: String, selectedAddition: String) {

        // TODO  Rest Anfrage oder von Model mit lesen ?
        switch (selectedSize) {
            case 'Small 26': return 0.50;
            case 'Normal 28': return 1;
            case 'Family 32': return 1.50;
            case 'Party 38': return 2;
            default: return 0.50;
        }

    }


    emitOrder(order:ItemOrder){
        console.log("emit order is called ->"+order.name+" "+order.quantity+" "+order.totalPrice);
        this.cartService.pizzaOrderEmitter.next(order);
    }



    calculateTotalPriceForAUnit(selectedPizza: PizzaUnit, selectedPizzaSize: String, listOfCheckedPizzaAdditions: PizzaAdditions[], quantity: Number) {
      
        return this.cartService.calculateTotalPriceForAUnit(selectedPizza,selectedPizzaSize,listOfCheckedPizzaAdditions,quantity);
    }
}