export class PizzaUnit {

    pizzaId: String;
    pizzaName: String;
    pizzaPrice: Number;
    pizzaDescription: String;

    constructor(pizzaId: String, pizzaName: String, pizzaDescription: String,pizzaPrice:Number) {
        this.pizzaId = pizzaId;
        this.pizzaName = pizzaName;
        this.pizzaDescription = pizzaDescription;
        this.pizzaPrice=pizzaPrice;

    }
}