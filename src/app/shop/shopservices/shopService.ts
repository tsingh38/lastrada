import { Unit } from '../catalog/catalog-unit/unit.model';
import { ItemInOrder } from '../catalog/ItemInOrder';

export class ShopService {
    itemInorder: ItemInOrder[];


    quantity: number;
    addUnitFromCatalogToShoppingCart(unit: Unit, quantity: number, size: String) {
        new ItemInOrder(unit.name, unit.description, unit.imagePath, unit.price, size, quantity);
        this.itemInorder.push(new ItemInOrder(unit.name, unit.description, unit.imagePath, unit.price, size, quantity));

    }

    


    addQuantityInaOrderItem(quantity: number) {
        this.quantity;
    }
}