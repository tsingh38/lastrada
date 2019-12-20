export class Unit{
    public name : String;
    public description:String;
    public imagePath:String;
    public price:String;

    constructor(name:String,description:String,imagePath:String,price:String){
    this.name=name;
    this.description=description;
    this.imagePath=imagePath;
    this.price=price;
    }
}