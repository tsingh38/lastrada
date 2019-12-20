import { Unit } from '../catalog/catalog-unit/unit.model';
import { ItemInOrder } from '../catalog/ItemInOrder';

export class ShopService {
    itemInorder: ItemInOrder[]=[];
    localObject:ItemInOrder;


    quantity: number;
    addUnitFromCatalogToShoppingCart(unit: Unit, quantity: number, size: String) {
        this.localObject =new ItemInOrder(unit.name, unit.description, unit.imagePath, unit.price, size, quantity);
        this.itemInorder.push(this.localObject);
        this.localObject=null;


    }

    


  getShoppingCartItems() :ItemInOrder[]{
      console.log(this.itemInorder);
      return this.itemInorder;
  }
}