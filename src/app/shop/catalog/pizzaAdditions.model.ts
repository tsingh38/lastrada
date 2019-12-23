export class PizzaAdditions {

    public id: String;
    public nameOfAddition: String;
    public description: String;
    public price: Number;

    constructor(id: String, nameOfAddition: String, description: String, price: Number) {
        this.id = id;
        this.nameOfAddition = nameOfAddition;
        this.description = description;
        this.price = price;
    }
}