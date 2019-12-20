import { Unit } from '../catalog/catalog-unit/unit.model';
import { ItemInOrder } from '../catalog/ItemInOrder';
import { Subject } from 'rxjs';

export class ShopService {
    itemInorder: ItemInOrder[] = [];
    localObject: ItemInOrder;
    updatePriceAndQuantityInCart = new Subject<{ quantity: number, price: String }>();


    quantity: number;
    addUnitFromCatalogToShoppingCart(unit: Unit, quantity: number, size: String) {
        if (this.itemInorder.length > 0 && this.existsItemAlreadyInList(unit, quantity, size)) {
            this.updateAlreadyExistingItemInList(unit, quantity, size);
        } else {
            console.log("unit id being pushed"+unit.unitId);
            this.localObject = new ItemInOrder(unit.unitId, unit.name, unit.description, unit.imagePath, unit.price, size, quantity);
            this.itemInorder.push(this.localObject);
            console.log("added object "+unit.unitId);
            this.localObject = null;
        }
    }
    updateAlreadyExistingItemInList(unit: Unit, quantity: number, size: String) {
        for(var existingUnit of this.itemInorder ){
         
            if(existingUnit.unitId ===unit.unitId){
                var newQuantity=quantity;
                var newPrice=Number(unit.price)*(Number(quantity)+Number(existingUnit.quantity));
                existingUnit.quantity=Number(existingUnit.quantity)+Number(quantity);
                existingUnit.totalPrice= newPrice.toFixed(2)+"";
            }
        }
    }

    existsItemAlreadyInList(unit: Unit, quantity: number, size: String): boolean {
        for(var existingUnit of this.itemInorder ){
            console.log("existingUnitInUpdateMethod "+existingUnit.unitId);
            console.log("new item"+unit.unitId);
            if(existingUnit.unitId ===unit.unitId){
                return true;
            }
        }
        
    }

    getTotalPriceOfOrder(){
        var totalPrice=0;
    for(var existingItem of this.itemInorder){
        totalPrice=Number(totalPrice)+Number(existingItem.totalPrice);
    }
    return Number(totalPrice.toFixed(2));
}


    getShoppingCartItems(): ItemInOrder[] {
        console.log(this.itemInorder);
        return this.itemInorder;
    }
}