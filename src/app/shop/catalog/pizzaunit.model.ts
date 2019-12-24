export class PizzaUnit {

    pizzaId: String;
    pizzaName: String;
    pizzaPriceS: Number;
    pizzaPriceN: Number;
    pizzaPriceF: Number;
    pizzaPriceP: Number;
    pizzaDescription: String;

    constructor(pizzaId: String, pizzaName: String, pizzaDescription: String,pizzaPriceS:Number,pizzaPriceN:Number,pizzaPriceF:Number,pizzaPriceP:Number) {
        this.pizzaId = pizzaId;
        this.pizzaName = pizzaName;
        this.pizzaDescription = pizzaDescription;
        this.pizzaPriceS=pizzaPriceS;
        this.pizzaPriceN=pizzaPriceN;
        this.pizzaPriceF=pizzaPriceF;
        this.pizzaPriceP=pizzaPriceP;

    }
}