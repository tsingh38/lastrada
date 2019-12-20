import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shopservices/shopService';
import { ItemInOrder } from '../catalog/ItemInOrder';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  orderedItems: ItemInOrder[];
  totalPrice: Number;

  constructor(private shoppingService: ShopService) {
    console.log("cart component is being called");
  }

  ngOnInit() {
    this.orderedItems = this.shoppingService.getShoppingCartItems();
    this.totalPrice = this.shoppingService.getTotalPriceOfOrder();
  }

  removeTheSelectedItem(selectedItem: ItemInOrder) {
    const index = this.orderedItems.indexOf(selectedItem, 0);
    if (index > -1) {
      this.orderedItems.splice(index, 1);
    }
    this.getUpdatedPrice();
  }

  getUpdatedPrice() {
    this.totalPrice = this.shoppingService.getTotalPriceOfOrder();
  }

  changed(event: Event, selectedItem: ItemInOrder) {
    var quantity=event.target.value;
    console.log("quantity is :"+quantity);
    this.updatePriceInCartOnChangeofQuantity(selectedItem.unitId, quantity)
    this.getUpdatedPrice();

  }

  updatePriceInCartOnChangeofQuantity(unitId: Number, quantity: Number) {
    for (var item of this.orderedItems) {
      if (item.unitId === unitId) {
        var unitPrice = item.unitPrice;
        var quantity = quantity;
        var totalPrice = Number(unitPrice) * Number(quantity);
        item.totalPrice=Number(totalPrice).toFixed(2);
      }
    }
    
  }
}
