export class ItemInOrder {
    public name: String;
    public description: String;
    public imagePath: String;
    public unitPrice: String;
    public unitId:Number;
    public totalPrice:String;
    public size: String;
    public quantity: Number;

    constructor(unitId:Number,name: String, description: String, imagePath: String, price: String, size: String, quantity: Number) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.quantity = quantity;
        this.unitPrice = price;
        this.totalPrice=Number(this.quantity)*Number(this.unitPrice)+"";
        this.size = size;
        this.unitId=unitId;

    }
}