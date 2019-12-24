import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PizzaUnit } from '../pizzaunit.model';
import { PizzaService } from '../pizza.service';
import { PizzaAdditions } from '../pizzaAdditions.model';
import { NgForm } from '@angular/forms';
import { PizzaSizes } from '../Pizzasizes.model';

@Component({
  selector: 'app-pizzagroup',
  templateUrl: './pizzagroup.component.html',
  styleUrls: ['./pizzagroup.component.scss']
})
export class PizzagroupComponent implements OnInit {
  openMealsByIndex: Boolean[] = [];
  selectedQuantity:Number=1;
  priceOnButton:Number=0;
  defaultSize='Normal 28';
  allPizzaSizes:  PizzaSizes [] = [];
  allPizzaItems: PizzaUnit[] = [];
  allPizzaAdditions: PizzaAdditions[] = [];
  show = 3;

  @ViewChild('f', { static: true }) formReference: NgForm;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.allPizzaItems = this.pizzaService.fetchAllPizzas();
    this.allPizzaAdditions = this.pizzaService.fetchAllPizzaAdditions();
    this.allPizzaSizes = this.pizzaService.fetchAllPizzaSizes();
   this.pizzaService.priceEmitter.subscribe(param=>{
this.priceOnButton=param;
    })
  }

  increaseTheNumber():Number{
    this.selectedQuantity = Number(this.selectedQuantity)+1;
    return this.selectedQuantity;
  }
  decreaseTheNumber():Number{
    if(this.selectedQuantity > 1){
    this.selectedQuantity = Number(this.selectedQuantity)-1;
    }
    return this.selectedQuantity;
  }

  fetchPizzaPriceForASize(){

  }

  openCollapsedDetailWindow(index: number) {
    this.openMealsByIndex[index] = true;
  }

  openDetailedWindow(index: number): boolean {
    if (this.openMealsByIndex[index] === true) {
      return true;
    }
    return false;
  }

  closeDetailWindow(index: number) {
    this.openMealsByIndex[index] = false;
  }

  displayPizzaAdditionPriceForSelectedPizzaSize(selectedPizzaSize:HTMLSelectElement,currentPizzaAddition:PizzaAdditions){
if(selectedPizzaSize.value.length > 0){
return this.pizzaService.fetchPriceOfAPizzaAdditionsAccordingToSize(selectedPizzaSize.value,currentPizzaAddition.id);
}
return 0;
  }

  pizzaSizeSelected(selectedPizza: PizzaUnit, event:Event){
    var selectedSize:String;
    selectedSize= (<HTMLTextAreaElement>event.target).value;
    var PriceForASelectedSize=this.pizzaService.fetchPriceOfAPizzaForASelectedSize(selectedPizza,selectedSize);
    this.pizzaService.priceEmitter.next(PriceForASelectedSize);

  }

  fetchPriceForSelectedAddition(pizzaAddition:PizzaAdditions, selectedPizza:any, selectedPizzaSize:HTMLSelectElement,event:Event){
   var defaultPriceOnButton=selectedPizza.pizzaPriceN;
   if(this.priceOnButton===0){
    this.priceOnButton=defaultPriceOnButton;
   }
   console.log("selectedPizza "+selectedPizza.pizzaPriceN);
    if((<HTMLInputElement>event.target).checked){
    var fetchedPrice=this.pizzaService.calculatePriceOfAPizzaAddition(selectedPizzaSize.value,pizzaAddition.id);
  this.priceOnButton=Number((Number(this.priceOnButton)+Number(fetchedPrice)).toFixed(2));
        } 
        else if(!(<HTMLInputElement>event.target).checked){
    var fetchedPrice=this.pizzaService.calculatePriceOfAPizzaAddition(selectedPizzaSize.value,pizzaAddition.id);
  this.priceOnButton=Number((Number(this.priceOnButton)-Number(fetchedPrice)).toFixed(2));
        } 
  }
}
