import { PizzaUnit } from './pizzaunit.model';
import { PizzaAdditions } from './pizzaAdditions.model';

export class ItemOrder{
id:string;
pizza:PizzaUnit;
name:string;
size:string;
listOfAdditions:PizzaAdditions[];
quantity:Number;
totalPrice:Number;


constructor(id:string,pizza:PizzaUnit,name:string,size:string,listOfAdditions:PizzaAdditions[],quantity:Number,totalprice:Number){
this.id=id;
this.pizza=pizza;
this.name=name;
this.size=size;
this.listOfAdditions=listOfAdditions;
this.quantity=quantity;
this.totalPrice=totalprice;
}
}
