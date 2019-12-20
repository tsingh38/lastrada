export class ItemInOrder {
    public name: String;
    public description: String;
    public imagePath: String;
    public price: String;
    public size: String;
    public quantity: Number;

    constructor(name: String, description: String, imagePath: String, price: String, size: String, quantity: Number) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
        this.size = size;
        this.quantity = quantity;

    }
}