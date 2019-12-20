export class Unit{
    public name : String;
    public unitId:Number;
    public description:String;
    public imagePath:String;
    public price:String;

    constructor(unitId:Number,name:String,description:String,imagePath:String,price:String){
    this.unitId=unitId;
    this.name=name;
    this.description=description;
    this.imagePath=imagePath;
    this.price=price;
    }
}