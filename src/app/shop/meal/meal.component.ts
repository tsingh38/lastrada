import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/mealservice';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  activeUrl:string;
  itemsToDisplay: Product[] = [];
  openMealsByIndex: Boolean[] = [];
  constructor(private mealService:MealService,private route:ActivatedRoute) { 
    this.mealService.fetchAllItems();
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
    this.activeUrl=params['id'];
    this.itemsToDisplay= this.mealService.fetchItemsForActiveUrl(this.activeUrl);
    });
    this.mealService.productWindowsClosedEmitter.subscribe((params)=>{
      var emitStatus={
        index:params.index,
        status:params.status
      };
      this.openMealsByIndex[emitStatus.index] = !emitStatus.status;
    })
  }

  isProductDetailedWindowOpen(index: number): boolean {
    if (this.openMealsByIndex[index] === true) {
      return true;
    }
    return false;
  }


  displayPlusSign(index: number,currentProduct:Product): boolean{
   if(!this.isProductDetailedWindowOpen(index) && 
     (currentProduct.productAdditions.length > 0 ||
        currentProduct.productOptions.length > 0)){
     return true;
   }
   return false;
  }

  openProductDetailWindow(index: number) {
    this.openMealsByIndex[index] = true;
  }
  closeProductDetailWindow(index: number) {
    this.openMealsByIndex[index] = false;
  }

  openDetailedWindow(index: number): boolean {
    if (this.openMealsByIndex[index] === true) {
      return true;
    }
    return false;
  }
}
