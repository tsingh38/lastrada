import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shopservices/shopService';
import {map} from 'Rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   price:number=0;
   quantity:number=0;
  static price1:number=0;
  static quantity1:number=0;
  constructor(private shopService:ShopService) { }

  ngOnInit() {
    
    this.shopService.updatePriceAndQuantityInCart.subscribe(updatePriceAndQuantity=>{
    
      var unitPrice=Number(updatePriceAndQuantity.price);
      var quantity=updatePriceAndQuantity.quantity;
      var Totalprice = unitPrice*quantity;
      HeaderComponent.price1+=Totalprice;
      HeaderComponent.quantity1=Number(HeaderComponent.quantity1)+Number(quantity);
      this.price= Number(HeaderComponent.price1.toFixed(2));
      this.quantity=HeaderComponent.quantity1;
    });
  }



}
