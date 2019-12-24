import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaAdditions } from '../pizzaAdditions.model';

@Injectable()
export class CartService{

    pizzaOrderEmitter=new Subject<{ id: String, name: String, size: String, listOfAdditions: PizzaAdditions[], quantity: Number, totalPrice: Number }>();

constructor(){

 }



 
}