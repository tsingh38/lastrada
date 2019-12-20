import { Component, OnInit, Input, ContentChild, ViewChild,ElementRef } from '@angular/core';
import{Unit} from './unit.model';
import { ShopService } from '../../shopservices/shopService';
import { ItemInOrder } from '../ItemInOrder';

@Component({
  selector: 'app-catalog-unit',
  templateUrl: './catalog-unit.component.html',
  styleUrls: ['./catalog-unit.component.scss']
})
export class CatalogUnitComponent implements OnInit {
@Input('Unit') unit :Unit;
@ContentChild('refQuantity',{static:false}) quantity:ElementRef; 
@ContentChild('refsize',{static:false}) size:ElementRef;  

 quantitySelectedForUnit :number;
 sizeSelectedForUnit :String;
 sizeList=['Normal','Small','Party','Family'];
  constructor(private shopService:ShopService) { }

  ngOnInit() {
  }

  processClickOperation(quantityRef:any,refSize:any,unit:Unit){
  

    this.quantitySelectedForUnit=quantityRef.value;
    this.sizeSelectedForUnit='Normal';
    var quantity:number=this.quantitySelectedForUnit;
    var price:String=unit.price;
     this.shopService.addUnitFromCatalogToShoppingCart(unit,this.quantitySelectedForUnit,this.sizeSelectedForUnit);
     this.shopService.updatePriceAndQuantityInCart.next({quantity,price});
  }

}
